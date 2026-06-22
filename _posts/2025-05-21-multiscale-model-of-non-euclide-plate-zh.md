---
title: "非欧几里得板的多尺度模型"
date: 2025-04-28
tags:
  - Geometric Elasticity
  - Rod
lang: zh
ref: multiscale-model-of-non-euclide-plate
permalink: /zh/2025/04/multiscale-model-of-non-euclide-plate/
---

本文介绍了非欧几里得板模型的基本理论。
<!-- more -->

作为一个成功的模型，非欧几里得板被广泛应用于预测双层结构的变形行为。然而，尽管各向异性膨胀可以通过该模型很好地描述，但该模型中的力学性质（具体来说是杨氏模量）是各向同性的。在现实中，几乎不可能找到具有这种特性的材料。通常，由排列的纤维约束的膨胀方向是各向异性膨胀的微观机制，这不可避免地导致杨氏模量的各向异性。理解各向异性杨氏模量与各向异性膨胀之间的耦合效应仍然远未得到充分研究。在本文中，我们从纤维-基体细观力学本构出发，构建了多尺度非欧几里得板模型。以螺旋面-螺旋带转变为例，评估了各向异性力学性质的影响。

## Introduction

在本文中，我们将构建一个多尺度非欧几里得板模型。我们的目标是解决这些问题：力学性质的各向异性有什么影响，是否可以忽略？

## 构建各向异性能量

受内应变作用下的双层板的能量泛函由下式给出：

$$
U=\frac{1}{2}\int{\left( \int_0^{t/2}{\left( \mathbf{\varepsilon }_a-\mathbf{\eta }_a \right) :\mathbf{D}_a}:\left( \mathbf{\varepsilon }_a-\mathbf{\eta }_a \right) dz+\int_{-t/2}^0{\left( \mathbf{\varepsilon }_b-\mathbf{\eta }_b \right) :\mathbf{D}_b}:\left( \mathbf{\varepsilon }_b-\mathbf{\eta }_b \right) dz \right) dA}
$$

面内应变和面外应变可以通过基尔霍夫-洛夫假设耦合。然后厚度方向上的平面应变可以表示为：

$$
\mathbf{\varepsilon }_a=\mathbf{\varepsilon }_{\mathbf{b}}=\frac{1}{2}\left( \mathbf{a}-\mathbf{I} \right) +z\mathbf{b}
$$

$\mathbf{a}$ 和 $\mathbf{b}$ 是板中面的第一和第二基本形式：

$$\mathbf{a}=\left( \begin{array}{c}
	\mathrm{E}\\
	\mathrm{G}\\
	2\mathrm{F}\\
\end{array} \right) , \mathbf{b}=\left( \begin{array}{c}
	\mathrm{L}\\
	\mathrm{N}\\
	2\mathrm{M}\\
\end{array} \right) $$

对于正交对称双层结构，内应变可以表示为：

$$\mathbf{\eta }_a=\left( \begin{array}{c}
	\eta _1\\
	\eta _2\\
	0\\
\end{array} \right) , \mathbf{\eta }_b=\left( \begin{array}{c}
	\eta _2\\
	\eta _1\\
	0\\
\end{array} \right) $$
