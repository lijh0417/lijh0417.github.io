---
title: "弹性反问题的玩具模型"
date: 2025-04-28
tags:
  - Rod
  - Inverse design
lang: zh
ref: inverse-elastica-toy-model
permalink: /zh/2025/04/inverse-elastica-toy-model/
---

本文介绍了一个基于[弹性反问题理论](../files/A_02-InverseElastica.pdf)的玩具模型。
<!-- more -->

在本文中，我们将讨论一个反设计问题：给定一条弹性线的目标构型，如何在固支-固支边界条件下确定未变形构型？

## 分析

对于这个问题，在求解欧拉弹性线的数学方程之前，我们进行两个定性分析。

一方面，该问题的解显然不唯一。假设目标构型为圆弧，至少有两个未变形构型适合这个问题：一根直梁（两端固支后可以弯曲成圆弧）和一个圆弧（与目标构型相同）。固支端为第一种情况提供了所需的弯矩，但第二种情况的约束反力为零，这意味着固支-固支边界条件对该系统没有意义，尽管圆弧构型是该反问题的解。

另一方面，作为反问题解的未变形构型，在施加固支-固支边界条件下与材料性质无关。为了理解这一点，我们考虑两根长度相同但弯曲刚度不同的直梁。如果将它们弯曲成圆弧，它们的变形构型是相同的。这是几何受挫的一个有趣点：固支-固支边界条件可以提供任意大小的约束反力。

为了完全理解这个问题，我们给出一个具体案例：设计一个圆弧的未变形构型。

## 圆弧的反设计

基尔霍夫杆的控制方程可以写为：

$$
\begin{aligned}
\mathbf{F}_s + \mathbf{q} &= 0 \\
\mathbf{M}_s + \mathbf{d}_3 \times \mathbf{F} + \mathbf{m} &= 0
\end{aligned}
\tag{1}
$$

考虑线弹性本构 $M = EI(\kappa - \bar{\kappa})$，并将弯矩和力展开到二维局部框架中，
$\mathbf{F} = F_3 \mathbf{d}_3 + F_1 \mathbf{d}_1$, 
$\mathbf{M} = M \mathbf{d}_2$：

$$
\begin{aligned}
(F_3)_s - \kappa F_1 &= 0 \\
(F_1)_s + \kappa F_3 &= 0 \\
EI(\kappa_s - \bar{\kappa}_s) + F_1 &= 0
\end{aligned}
\tag{2}
$$

如果目标构型是圆弧，我们有 $\kappa = c = \mathrm{const}$，方程 (2) 可以解为：

$$
\left\{
\begin{aligned}
F_3 &= F_0 \sin \theta \\
F_1 &= F_0 \cos \theta \\
EI \bar{\kappa}_s &= F_0 \cos \theta \\
\theta &= s / R
\end{aligned}
\right.
\tag{3}
$$

最终我们得到：
$\bar{\kappa} = \frac{F_0 R}{EI} \sin(s/R) + \bar{\kappa}_0$，
其中 $\bar{\kappa}_0 = \mathrm{const}$ 是一个积分常数。

$$
\bar{\kappa} = \frac{F_0 R}{EI} \sin(s/R) + \bar{\kappa}_0
\tag{4}
$$

如果两端施加的力为零，未变形构型是圆弧或直线，自然曲率为任意大小的常数，如第2节所示。如果反力不为零，方程 (4) 是该反问题的解。

给定任意力作为边界条件，可以通过求解方程 (3) 得到解。然而，求解得到的未变形构型可能不是我们想要的。例如，对于三维情况，我们希望未变形构型是平面曲线。这个反问题本质上是一个优化问题：

$$
\min_{F_0} f(\bar{\kappa}, \kappa_{obj})
$$
