---
title: 用mathematica计算微分几何中的部分量
date: 2022-07-18 14:56:56
tags:
- mathematica
- 数学
---
mathematica在微分几何中的几个应用：
+ 动态绘制空间曲线的密切平面
+ 求曲面中的一些基本量
+ 求曲面第一基本形式
+ 求曲面第二基本形式
+ 求曲面向量两个方向夹角
+ 求曲面域的面积
+ 动态绘制Dipan指标线
  <!--more-->
## 动态绘制空间曲线密切平面
```mathematica
Clear["`*"]
f[x_, y_, z_, t0_] := 
 Block[{X, Y, Z}, 
  Dot[Cross[{x'[t0], y'[t0], z'[t0]}, {x''[t0], y''[t0], 
     z''[t0]}], {X - x[t0], Y - y[t0], Z - z[t0]}]]
Manipulate[
 Show[{ParametricPlot3D[{Cos[k], Sin[k], k}, {k, -\[Pi], \[Pi]}, 
    PlotRange -> {{-3, 3}, {-3, 3}, {-4, 4}}, Boxed -> False, 
    Axes -> False], 
   ContourPlot3D[
    f[Cos, Sin, # &, t] == 0, {X, Cos[t] - 0.5, Cos[t] + 0.5}, {Y, 
     Sin[t] - 0.5, Sin[t] + 0.5}, {Z, t - 0.5, t + 0.5}], 
   ListPointPlot3D[{{Cos[t], Sin[t], t}}, 
    PlotStyle -> {Red, PointSize[Large]}]}]
 , {t, -\[Pi], \[Pi]}]
  ```
## 曲面论
### 求曲面基本参数，第一、第二基本形式，方向角、曲面域的面积
```mathematica
Clear["`*"]
SurfaceParameters[r_] :=
 Block[{n, E1, F1, G1, L2, M2, N2, u, v},
  n = Normalize[Cross[D[r[u, v], u], D[r[u, v], v]]];
  E1 = Dot[D[r[u, v], u], D[r[u, v], u]];
  F1 = Dot[D[r[u, v], u], D[r[u, v], v]];
  G1 = Dot[D[r[u, v], v], D[r[u, v], v]];
  L2 = Dot[n, D[r[u, v], {u, 2}]];
  M2 = Dot[n, D[D[r[u, v], v], u]];
  N2 = Dot[n, D[r[u, v], {v, 2}]];
  Grid[{{"E", "F", "G", "L", "M", "N"}, {E1, F1, G1, L2, M2, N2}} // 
    Simplify[#, {u, v} \[Element] PositiveReals] &, Frame -> All]]


FirstBasicForm[r_] := 
 Block[{u, v, du, dv}, 
  n = Normalize[Cross[D[r[u, v], u], D[r[u, v], v]]]; 
  E1 = Dot[D[r[u, v], u], D[r[u, v], u]];
  F1 = Dot[D[r[u, v], u], D[r[u, v], v]];
  G1 = Dot[D[r[u, v], v], D[r[u, v], v]];
  (E1*du^2 + 2*F1*du*dv + G1*dv^2) // 
   Simplify[#, {u, v} \[Element] PositiveReals] &]

SecondBasicForm[r_] := Block[{u, v, du, dv},
  n = Normalize[Cross[D[r[u, v], u], D[r[u, v], v]]];
  L2 = Dot[n, D[r[u, v], {u, 2}]];
  M2 = Dot[n, D[D[r[u, v], v], u]];
  N2 = Dot[n, D[r[u, v], {v, 2}]];
  (L2*du^2 + 2*M2*du*dv + N2*dv^2) // 
   Simplify[#, {u, v} \[Element] PositiveReals] &]

SurfaceAngle[r_, r0_, r1_, r2_] :=
 Block[{du, dv, \[Delta]u, \[Delta]v, u, v},
  E1 = Dot[D[r[u, v], u], D[r[u, v], u]];
  F1 = Dot[D[r[u, v], u], D[r[u, v], v]];
  G1 = Dot[D[r[u, v], v], D[r[u, v], v]];
  
  ReplaceAll[
   ArcCos[(E1*du*\[Delta]u + F1*(du*\[Delta]v + dv*\[Delta]u) + 
       G1*dv*\[Delta]v)/(Sqrt[E1*du^2 + 2*F1*du*dv + G1*dv^2]*Sqrt[
       E1*\[Delta]u^2 + 2*F1*\[Delta]u*\[Delta]v + 
        G1*\[Delta]v^2])], {du -> r1[[1]], 
    dv -> r1[[2]], \[Delta]u -> r2[[1]], \[Delta]v -> r2[[2]], 
    u -> r0[[1]], v -> r0[[2]]}]]

ManifoldArea[r_, R1_, R2_] := Block[{u, v},
  E1 = Dot[D[r[u, v], u], D[r[u, v], u]];
  F1 = Dot[D[r[u, v], u], D[r[u, v], v]];
  G1 = Dot[D[r[u, v], v], D[r[u, v], v]];
  Integrate[Sqrt[ E1*G1 - F1^2], Prepend[R1, u], Prepend[R2, v]]]
```
### 一些测试范例
```mathematica
SurfaceAngle[{Cos[#2]*#1, Sin[#2] #1, 3*#2} &, {3, 1}, {1, 1}, {-1, 
   1}] // N
Simplify[FirstBasicForm[{Cos[#2]*#1, Sin[#2] #1, a*#2} &], {a, 
    Cos[v]} \[Element] Reals];
Simplify[SecondBasicForm[{Cos[#2]*#1, Sin[#2] #1, a*#2} &], {a, 
    Cos[v], Sin[v]} \[Element] PositiveReals];
Simplify[SurfaceParameters[
   R*{Cos[#2]*Cos[#1], Sin[#1]*Cos[#2], Sin[#2]} &], {R, u, v, 
    Cos[v]} \[Element] PositiveReals];
Simplify[SurfaceParameters[{a*#2*Cos[#1], a*#2*Sin[#1], 
     a*#2^2} &], {a, u, v} \[Element] PositiveReals];
ManifoldArea[
   R*{Cos[#2]*Cos[#1], Sin[#1]*Cos[#2], Sin[#2]} &, {0, 
    2 \[Pi]}, {-\[Pi]/2, \[Pi]/2}] // Simplify[#, R > 0] &;
FirstBasicForm[{#1 Cos[#2], #1 Sin[#2], #1 + #2} &];
FirstBasicForm[{#2 Cos[#1], #2 Sin[#1], Sqrt[#2^2 - 1]} &] /. {u -> 
     ArcTan[x] + y, v -> Sqrt[x^2 + 1], du -> 1/(1 + x^2) dx + dy, 
    dv -> (x*dx)/Sqrt[x^2 + 1]} // Simplify;
Simplify[SecondBasicForm[{R*Cos[#2] Cos[#1], R*Cos[#2]*Sin[#1], 
    R*Sin[#2]} &], {R, u, v, Cos[u], Sin[u], Cos[v], 
   Sin[v]} \[Element] PositiveReals]
```
### 切平面与法线
```mathematica
TangentPlane[r_, r0_] := 
 Block[{u, v}, 
  Det[{{X, Y, Z} - r @@ r0, D[r @@ {u, v}, u], 
       D[r @@ {u, v}, v]} /. {u -> r0[[1]], v -> r0[[2]]}] == 0 // 
   Simplify]
CurveNormal[r_, r0_] := 
 Block[{u, 
   v}, ((X - (r @@ r0)[[1]])/
     Det[{{D[r @@ {u, v}, u][[2]], 
        D[r @@ {u, v}, v][[2]]}, {D[r @@ {u, v}, u][[3]], 
        D[r @@ {u, v}, v][[3]]}}] == (Y - (r @@ r0)[[2]])/
     Det[{{D[r @@ {u, v}, u][[3]], 
        D[r @@ {u, v}, v][[3]]}, {D[r @@ {u, v}, u][[1]], 
        D[r @@ {u, v}, v][[1]]}}] == (Z - (r @@ r0)[[3]])/
     Det[{{D[r @@ {u, v}, u][[1]], 
        D[r @@ {u, v}, v][[1]]}, {D[r @@ {u, v}, u][[2]], 
        D[r @@ {u, v}, v][[2]]}}])]
```
### 测试范例
```mathematica
*范例*
TangentPlane[{a*Cos[#1]*Cos[#2], a*Cos[#2]*Sin[#1], 
   a*Sin[#2]} &, {\[Phi], \[Theta]}]
CurveNormal[{a*Cos[#1]*Cos[#2], a*Cos[#2]*Sin[#1], 
    a*Sin[#2]} &, {\[Phi], \[Theta]}] // Simplify
Manipulate[
 ContourPlot3D[
   a Cos[\[Theta]]*\[Theta]* (a - Z Sin[\[Theta]] - 
       Cos[\[Theta]] (X Cos[\[Phi]] + Y Sin[\[Phi]])) == 0, {X, -1, 
    1}, {Y, -1, 1}, {Z, -1, 1}] /. 
  a -> 1, {\[Theta], -\[Pi], \[Pi]}, {\[Phi], -\[Pi], \[Pi]}]
ParametricPlot3D[{Cos[#1] #1*Cos[#2], #2 Cos[#2]*Sin[#1], 
     Sin[#2]} & @@ {\[Phi], \[Theta]}, {\[Phi], -\[Pi], \[Pi]}, {\
\[Theta], -\[Pi], \[Pi]}] /. a -> 1
```
## Dipan指标线
```mathematica
Clear["`*"]
Dupin[r_, r0_] := Block[{u, v, x, y, \[Rho], t},
  n = Normalize[Cross[D[r[u, v], u], D[r[u, v], v]]];
  L2 = Dot[n, D[r[u, v], {u, 2}]];
  M2 = Dot[n, D[D[r[u, v], v], u]];
  N2 = Dot[n, D[r[u, v], {v, 2}]];
  sol = Solve[
    Evaluate[(L2*x^2 + 2*M2*x*y + N2*y^2) /. {Abs[x_] -> x, 
        x -> \[Rho]*Cos[t], y -> \[Rho]*Sin[t]}] == 1, \[Rho]] ;
  s = RotationTransform[{{0, 0, 1}, n}][{Abs[\[Rho] /. sol[[1]]]*
      Cos[t], Abs[\[Rho] /. sol[[1]]]*Sin[t], 0}];
  TranslationTransform[
    Dot[r @@ r0 - s /. t -> 1, n /. {u -> r0[[1]], v -> r0[[2]]}]*
      n /. {u -> r0[[1]], v -> r0[[2]]}][s]]

TangentPlane[r_, r0_] := 
 Block[{u, v}, 
  Det[{{X, Y, Z} - r @@ r0, D[r @@ {u, v}, u], 
       D[r @@ {u, v}, v]} /. {u -> r0[[1]], v -> r0[[2]]}] == 0 // 
   Simplify]

Show[
 {ParametricPlot3D[{Cos[u], Cos[v], Cos[u + v]}, {u, 0, 2 \[Pi]}, {v, 
    0, 2 \[Pi]}, PlotRange -> 3, Boxed -> False, Axes -> None, 
   Mesh -> None], 
  ParametricPlot3D[
   Evaluate[
    Dupin[{Cos[#1], Cos[#2], Cos[#1 + #2]} &, {u, v}] /. {u -> 1.5, 
      v -> 1}], {t, -\[Pi], \[Pi]}, PlotStyle -> Red],
  ContourPlot3D[
   Evaluate[
    TangentPlane[{Cos[#1], Cos[#2], Cos[#1 + #2]} &, {1.5, 
      1}]], {X, -4, 4}, {Y, -4, 4}, {Z, -4, 4}, Mesh -> None, 
   BoundaryStyle -> None, ContourStyle -> {Opacity[0.3], Green}], 
  Graphics3D[{PointSize[Large], Red, 
    Point[{Cos[#1], Cos[#2], Cos[#1 + #2]} & @@ {1.5, 1}]}]}]

Manipulate[Show[
  {ParametricPlot3D[{Cos[u], Cos[v], Cos[u + v]}, {u, 0, 2 \[Pi]}, {v,
      0, 2 \[Pi]}, PlotRange -> 4, Boxed -> False, Axes -> None, 
    Mesh -> None], 
   ParametricPlot3D[
    Evaluate[
     Dupin[{Cos[#1], Cos[#2], Cos[#1 + #2]} &, {u, v}] /. {u -> u0, 
       v -> v0}], {t, -\[Pi], \[Pi]}, PlotStyle -> Red],
   ContourPlot3D[
    Evaluate[
     TangentPlane[{Cos[#1], Cos[#2], Cos[#1 + #2]} &, {u0, 
       v0}]], {X, -4, 4}, {Y, -4, 4}, {Z, -4, 4}, Mesh -> None, 
    BoundaryStyle -> None, ContourStyle -> {Opacity[0.3], Green}], 
   Graphics3D[{PointSize[Large], Red, 
     Point[{Cos[#1], Cos[#2], Cos[#1 + #2]} & @@ {u0, v0}]}]}], {u0, 
  0.1, 2 \[Pi]}, {v0, 0.1, 2 \[Pi]}, ControlPlacement -> Top]
```