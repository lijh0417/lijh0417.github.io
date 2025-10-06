clear; clc;

% 设置常量
phi = pi / 4;   % ϕ = π/4
gamma = 2;      % γ = 2

% 定义参数函数 r(s, t)
r = @(s, t) [
    s .* sin(phi) + (t .* (cos(phi) - cos(3*phi))) / 2 + (sin(gamma * t) .* cos(phi) .* cos(2*phi)) / gamma;
    (cos(phi) .* sin(gamma * s) .* cos(gamma * t)) / gamma ...
        - (2 * sin(phi) .* cos(phi).^2 .* cos(gamma * s) .* sin(gamma * t)) / gamma ...
        + t .* sin(phi) .* cos(2*phi) .* cos(gamma * s);
    (cos(phi) .* (cos(gamma * s) .* cos(gamma * t) - 1)) / gamma ...
        + (2 * sin(phi) .* cos(phi).^2 .* sin(gamma * s) .* sin(gamma * t)) / gamma ...
        - t .* sin(phi) .* cos(2*phi) .* sin(gamma * s)
];

% 生成网格
[s_grid, t_grid] = meshgrid(linspace(-2, 2, 100), linspace(-2, 2, 100));

% 计算 r(s, t)
R = r(s_grid, t_grid);  % R 应该是 3×100×100

% 提取坐标分量
X = squeeze(R(1,:,:))';
Y = squeeze(R(2,:,:))';
Z = squeeze(R(3,:,:))';

% 检查 NaN/Inf
if any(isnan(X(:))) || any(isinf(X(:)))
    error('X contains NaN or Inf!');
end
if any(isnan(Y(:))) || any(isinf(Y(:)))
    error('Y contains NaN or Inf!');
end
if any(isnan(Z(:))) || any(isinf(Z(:)))
    error('Z contains NaN or Inf!');
end

% 绘图
figure;
surf(X, Y, Z, 'EdgeColor', 'none');
xlabel('X'); ylabel('Y'); zlabel('Z');
title('Parametric surface r(s, t)');
shading flat;
axis equal;
view(3);
colorbar;
