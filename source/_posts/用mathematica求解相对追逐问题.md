---
title: 用mathematica求解相对追逐问题
date: 2022-03-18 12:43
tags:
- mathematica
- 物理
---
**相对追逐问题：**
几个人处于n边形的定点上，前一个人朝着后一个人运动。
详情见[https://en.wikipedia.org/wiki/Mice_problem](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Mice_problem)
<!--more-->

理论上可以证明，追踪曲线解析解为对数螺线。

利用**mathematica**可以依次数值求解微分方程绘制轨迹曲线。

```mathematica
Clear["`*"]
n = 10;
a = CirclePoints[n];
b = 0.1;
equ = Flatten@
   Table[{Sqrt[y[k]'[t]^2 + x[k]'[t]^2] == 
      b, (y[Mod[k + 1, n, 1]][t] - y[k][t])*
       D[x[k][t], t] == (x[Mod[k + 1, n, 1]][t] - x[k][t])*
       D[y[k][t], t], Thread[{x[k][0], y[k][0]} == a[[k]]], 
     Thread[{x[k]'[0], y[k]'[0]} == 
       b*Normalize[a[[Mod[k + 1, n, 1]]] - a[[k]]]]}, {k, 1, n}];
sol = NDSolve[equ, Flatten[{x[#], y[#]} & /@ Range@n], {t, 0, 32}, 
    Method -> {"EquationSimplification" -> "Residual"}] // Flatten;
Plot[Evaluate@Through[Values[sol][t]], {t, 0, 32}, ImageSize -> Large]
Show[{ParametricPlot[
   Evaluate@Partition[Through[Values[sol][t]], 2], {t, 0, 30}, 
   PlotTheme -> "Scientific", PlotLabel -> "Bugs' movation", 
   FrameLabel -> {"x", "y"}]
  , Graphics[Line[Append[CirclePoints[n], First@CirclePoints[n]]]]}]
```




