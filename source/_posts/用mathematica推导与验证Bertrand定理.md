---
title: 用mathematica推导与验证Bertrand定理
date: 2022-03-18 12:38
tags:
- mathematica
- 物理
---
Bertrand定理描述了闭合轨道条件下具有幂函数形式的有心力的可能情况
<!--more-->
## 1公式推导

**Bertrand定理**指出，对于有心力场，位势 ![V(r)=-\frac{k}{r^\beta}](https://www.zhihu.com/equation?tex=V%28r%29%3D-%5Cfrac%7Bk%7D%7Br%5E%5Cbeta%7D) ，只有当 ![\beta=1 \vee -2](https://www.zhihu.com/equation?tex=%5Cbeta%3D1+%5Cvee+-2) 时，运动轨道才是闭合的。

根据[https://zh.wikipedia.org/wiki/%E4%BC%AF%E7%89%B9%E8%98%AD%E5%AE%9A%E7%90%86](https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E4%BC%AF%E7%89%B9%E8%98%AD%E5%AE%9A%E7%90%86)中的证明思路，可以利用mathematica进行推导。

代码:

```mathematica
Clear["`*"]
J[x_] := A*x^(1 - \[Beta]^2);

ruleJ = First[Solve[D[J[x], x] == (1 - \[Beta]^2), A]];

rule1 := Table[Cos[k*\[Beta]*\[Theta]] -> 0, {k, 1, 9}]
rule2 = {h0 -> A*h1^2,
    h2 -> B*h1^2,
    h3 -> F*h1^3}~Join~
   Fold[ReplaceAll, {J1 -> 1 - \[Beta]^2,
     J2 -> D[J[x], {x, 2}],
     J3 -> D[J[x], {x, 3}]}, ruleJ~Append~(x -> u0)]~Join~
   Table[Power[h1, k] -> 0, {k, 4, 9}];


\[Eta][\[Theta]_] := 
 h0 + h1*Cos[\[Beta]*\[Theta]] + h2*Cos[2*\[Beta]*\[Theta]] + 
  h3*Cos[3*\[Beta]*\[Theta]]
x = D[\[Eta][\[Theta]], {\[Theta], 2}] + \[Beta]^2*\[Eta][\[Theta]];
y = TrigReduce[(1/2 \[Eta][\[Theta]]^2*J2 + 
     1/6 \[Eta][\[Theta]]^3*J3)];
a = Coefficient[
   x, {Cos[\[Beta]*\[Theta]], Cos[2 \[Beta]*\[Theta]], 
    Cos[3 \[Beta]*\[Theta]]}];
b = Coefficient[
   y, {Cos[\[Beta]*\[Theta]], Cos[2 \[Beta]*\[Theta]], 
    Cos[3 \[Beta]*\[Theta]]}];
PrependTo[a, x /. rule1];
PrependTo[b, y /. rule1];
s = Fold[ReplaceAll, {a, b}, rule2];
equ1 = MapThread[#1 == #2 &, s];
sol = Solve[equ1, {A, B, F, \[Beta]}]
```

## 2 数值验证

利用mathematica可以对Bertrand定理做出验证。

如图绘制了不同有心力 ![F(r)=-\frac{k}{r^\alpha}](https://www.zhihu.com/equation?tex=F%28r%29%3D-%5Cfrac%7Bk%7D%7Br%5E%5Calpha%7D) 情况下的运动轨道。

可以发现只有 ![\alpha=-1\vee2](https://www.zhihu.com/equation?tex=%5Calpha%3D-1%5Cvee2) 时，轨道才是闭合的。

图上传不了，分享个结果的pdf链接。

[https://maiimg.com/pdf/?e=auNKkKmHMM43s6](https://link.zhihu.com/?target=https%3A//maiimg.com/pdf/%3Fe%3DauNKkKmHMM43s6)

代码：

```mathematica
Clear["`*"]
F[x_, k_] := -400/x^k;

equ[k_] := {\[Rho]''[t] - \[Theta]'[t]^2*\[Rho][t] == 
    F[\[Rho][t], k], \[Theta]''[t]*\[Rho][t] + 
     2*\[Theta]'[t]*\[Rho]'[t] == 0, \[Theta][0] == 0, \[Rho][0] == 
    1, \[Rho][0] \[Theta]'[0] == 10, \[Rho]'[0] == 10};

sol[k_] := NDSolve[equ[k], {\[Theta], \[Rho]}, {t, 0, 10}];

Grid[Partition[Table[
   ParametricPlot[
    Evaluate[{\[Rho][t]*Cos[\[Theta][t]], \[Rho][t]*
        Sin[\[Theta][t]]} /. First[sol[k]]], {t, 0, 10}, 
    PlotRange -> All, PlotTheme -> "Scientific", 
    PlotLabel -> "有心力场轨道 \[Alpha]=" <> ToString[k], 
    FrameLabel -> {"x", "y"}]
   , {k, -3.6, 2.7, 0.1}], 8], Frame -> All]
```



