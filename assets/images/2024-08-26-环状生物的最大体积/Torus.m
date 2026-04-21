clear; clc; close all;
% Define colors
colors = struct('red', [241 64 64]/255, 'blue', [26 111 223]/255, ...
                'black', [81 81 81]/255, 'white', [1 1 1]);
% Generate colormap
NN = 500;
alpha = linspace(0,1,NN)';
map = [colors.white.*alpha + colors.blue.*(1-alpha); ...
       colors.red.*alpha + colors.white.*(1-alpha)];
% Load data and calculate volumes
load('solint.mat')
Vol = R.*r.^2;
[Volmax, maxi] = max(Vol);
%% Plot R-r R-Vol diagram
aa0=[maxi;1:50];
maxr=ones(1,50);
for j = 1:50
    maxr(j)=r(aa0(1,j),aa0(2,j));
    plot3(R, r(:,j), Vol(:,j), 'LineWidth', 2);
    hold on;
end
plot3(R(maxi), maxr, Volmax, 'Color', colors.black, 'LineWidth', 3);
plot(R, R, 'Color', colors.red, 'LineWidth', 3, 'LineStyle', "--");
xlabel('R/L'); ylabel('r/L'); zlabel('Vol/(2\pi^2L^3)');
set(gca, 'FontSize', 30, 'LineWidth', 2);
set(gcf, 'Position', [0 0 1000 900]);
print('diagram', '-dpng');
%%
close all
plot3(R, R, 0*R,'Color', colors.black, 'LineWidth', 4, 'LineStyle', "--");
grid on
hold on

for j = 1:50
scatter3(R, r(:,j), Vol(:,j),30,Vol(:,j),'filled')
hold on
end
colormap(map)
hold on
scatter3(interp1(maxr,R(maxi),linspace(maxr(1),maxr(end),1000),'spline'), linspace(maxr(1),maxr(end),1000), interp1(maxr,Volmax,linspace(maxr(1),maxr(end),1000),'spline'),30,interp1(maxr,Volmax,linspace(maxr(1),maxr(end),1000),'spline'),'filled');
colorbar('Ticks',[0,0.5e-3,1e-3],FontSize=35,LineWidth=2.5)
xlabel('R/L'); ylabel('r/L'); zlabel('Vol/(2\pi^2L^3)');
axis([0 0.16 0 0.16 0 1.3e-3])
xticks([0 0.06 0.12])
yticks([0 0.06 0.12])
set(gca, 'FontSize', 40, 'LineWidth', 4);
set(gcf, 'Position', [0 0 1250 1100]);
title('Diagram for volume of Torus')

print('diagram_Volume', '-dpng');

% view([1 1 1])
%% Plot the Torus
kn = [1 5 10 15];
for k = 1:length(kn)
    R1 = R([1 200 maxi(kn(k)) 800 1000]);
    r1 = r([1 200 maxi(kn(k)) 800 1000], kn(k));
    for i = 1:length(R1)
        subplot(length(kn), length(R1), (k-1)*length(R1)+i);
        Tours_plt(R1(i), r1(i), map);
        view([1 2 2])
        hold on
        Tours_line_plt(R1(i),r1(i),kn(k))
        axis equal
        title(sprintf('(%.1e, %.1e, %.1e, %d)',R1(i), r1(i), r1(i)^2*R1(i), kn(k)),'FontSize',35);
    end
end
set(gcf, 'Position', [0 0 4000 5000]);
print('Torus.png', '-dpng');

% R/L = %.2f; r/L = %.2f; Volume/L^3 = 2π²%.2f; k = %d
%% Torus line plot function
function [] = Tours_line_plt(R, r, k)
    a = linspace(0, 2*pi, 1000);
    b = k*a;
    x = (R-r*cos(b)).*cos(a);
    y = (R-r*cos(b)).*sin(a);
    z = r*sin(b);
    plot3(x, y, z, 'LineWidth', 5, 'Color', [55 173 107]/255);
    axis off;
end
% Torus plot function
function [] = Tours_plt(R, r, cmap)
    funx = @(a,b) (R-r*cos(a)).*cos(b);
    funy = @(a,b) (R-r*cos(a)).*sin(b);
    funz = @(a,b) r*sin(a);
    fsurf(funx, funy, funz, [0 2*pi 0 2*pi], 'EdgeColor', "none");
    colormap(cmap);
    axis off;
end