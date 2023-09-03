---
title: 用mathematica实现均值不等式可视化
date: 2022-03-18 12:35
tags:
- mathematica
---

**调和—几何—算数—平方不等式。**

调和平均数，几何平均数，算术平均数，平方平均数之间又如下关系：（二元）

![\frac{2}{\frac{1}{x}+\frac{1}{y}}\leq\sqrt{xy}\leq\frac{x+y}{2}\leq\sqrt{x^2+y^2}](https://www.zhihu.com/equation?tex=%5Cfrac%7B2%7D%7B%5Cfrac%7B1%7D%7Bx%7D%2B%5Cfrac%7B1%7D%7By%7D%7D%5Cleq%5Csqrt%7Bxy%7D%5Cleq%5Cfrac%7Bx%2By%7D%7B2%7D%5Cleq%5Csqrt%7Bx%5E2%2By%5E2%7D)
<!--more-->

利用**mathematica**可以实现可视化：

n代表不同的伪随机种子

```mathematica
Clear["`*"];
Manipulate[
 Row[{scene = RandomInstance[
     GeometricScene[{a, b, c, d, e, f, o},
      {GeometricStep[{Triangle[{a, b, c}], 
         CircleThrough[{a, b, c, e}, o],
         o == Midpoint[{a, b}], Line[{d, e}], Line[{a, d, o, b}], 
         Line[{c, f, o}],
         GeometricAssertion[{Line[{a, b}], Line[{c, d}]}, 
          "Perpendicular"],
         GeometricAssertion[{Line[{d, f}], Line[{c, o}]}, 
          "Perpendicular"],
         GeometricAssertion[{Line[{a, b}], Line[{o, e}]}, 
          "Perpendicular"]
         }, "平均值不等式"]}
      ], RandomSeeding -> n
     ],
   {AA, BB, CC, 
     DD} = {EuclideanDistance [d, e], EuclideanDistance [o, e], 
      EuclideanDistance [d, c], EuclideanDistance [c, f]} /. 
     scene["Points"];
   Column[{"  \!\(\*SqrtBox[FractionBox[\(\*SuperscriptBox[\(x\), \(2\
\)] + \*SuperscriptBox[\(y\), \(2\)]\), \(2\)]]\)=de=" <> ToString[AA],
     "  \!\(\*FractionBox[\(x + y\), \(2\)]\)=oe=" <> ToString[BB],
     "  \!\(\*SqrtBox[\(xy\)]\)=cd=" <> ToString[CC],
     "  \!\(\*FractionBox[\(2  xy\), \(x + y\)]\)=cf=" <> 
      ToString[DD]}]}]
 , {n, 1, 10, 1}, ControlPlacement -> Top]
```

![img](https://pic4.zhimg.com/v2-34d6677e27e92b0814ec126f6e9c420b_r.jpg)



