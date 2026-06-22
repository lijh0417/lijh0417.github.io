---
title: "非欧几里得欧拉屈曲"
date: 2025-11-26
tags:
  - Geometric Elasticity
  - Rod
lang: zh
ref: non-euclidean-euler-buckling
permalink: /zh/2025/11/non-euclidean-euler-buckling/
---

本篇笔记介绍了曲面约束的Kirchhoff杆理论的基本理论。

<!-- more -->

在经典的欧拉屈曲中，梁位于平面上。然而，当杆位于曲面上时会发生什么？确切地说，高斯曲率对屈曲临界载荷有何影响？

## 标架变换

我们考虑该体系中的两个标架：杆的材料标架 $\mathbf{d}=\{\mathbf{d}_1,\mathbf{d}_2,\mathbf{d}_3\}$ 和曲面标架 $\{\mathbf{n}\times\mathbf{d}_3,\mathbf{n},\mathbf{d}_3\}$，其中 $\mathbf{n}$ 是曲面的法向量。为方便起见，取 $\mathbf{e}_3=\mathbf{d}_3$，$\mathbf{e}_1=\mathbf{n}\times\mathbf{d}_3$，$\mathbf{e}_2=\mathbf{n}$ 作为曲面标架 $\mathbf{e}=\{\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3\}$。标架的运动方程可以写为：

$$
\partial_s \mathbf{d}=\mathbf{\Omega}\mathbf{d},
$$

$$
\partial_s \mathbf{e}=\mathbf{\Gamma}\mathbf{e},
$$

其中 $\mathbf{\Omega}$ 和 $\mathbf{\Gamma}$ 分别是两个标架的旋转张量。具体可以表示为：

$$
\mathbf{\Omega}=\begin{pmatrix}0& \omega_3 & -\omega_2\\ -\omega_3 & 0 & \omega_1 \\ \omega_2 & -\omega_1 & 0  \end{pmatrix}
$$

和

$$
\mathbf{\Gamma}=\begin{pmatrix}0 & \tau_g & -\kappa_g \\ -\tau_g & 0 & -\kappa_n \\ \kappa_g & \kappa_n & 0\end{pmatrix}
$$

我们假设材料标架可以通过绕 $\mathbf{d}_3$ 旋转角度 $\phi$ 由曲面标架生成，则有 $\mathbf{d}=\mathbf{R}\mathbf{e}$，最终 $\mathbf{\Omega}$ 可以用 $\mathbf{\Gamma}$ 和 $\mathbf{R}$ 表示：

$$
\mathbf{\Omega}=\mathbf{R}_s\mathbf{R^T}+\mathbf{R}\mathbf{\Gamma}\mathbf{R^T},
$$

其中 $\mathbf{R}$ 是描述绕 $\mathbf{d}_3$ 旋转 $\phi$ 的旋转矩阵，$\mathbf{R}_s=\partial_s\mathbf{R}$ 是 $\mathbf{R}$ 的偏导数，$\mathbf{R^T}$ 是 $\mathbf{R}$ 的转置。

## 空间变换

我们在上一节中描述了内部运动，现在考虑空间曲线在绝对标架 $\{\mathbf{i},\mathbf{j},\mathbf{k}\}$ 中的运动。我们假设从绝对标架到材料标架的变换由四元数 $\mathbf{q}=\{q_0(s),q_1(s),q_2(s),q_3(s)\}^T$ 描述，则旋转给 $\mathbf{q}$ 带来了约束：

$$
\mathbf{q}_s=\mathbf{Q}\mathbf{q},
$$

其中 $\mathbf{Q}=\begin{pmatrix}0 & -\mathbf{\omega} \\ \mathbf{\omega}^T & \mathbf{\Omega} \end{pmatrix}$，$\mathbf{\omega} = \mathrm{ax}(\mathbf{\Omega}) = \{\omega_1,\omega_2,\omega_3\}$ 为轴向量。注意变形构型 $\mathbf{r}(s)=x(s)\mathbf{i}+y(s)\mathbf{j}+z(s)\mathbf{k}=\{x(s),y(s),z(s)\}^T$ 可以表示为：

$$
\mathbf{r}_s=\mathbf{O}_3^{\mathsf{T}},
$$

其中 $\mathbf{O}_3$ 是矩阵 $\mathbf{O}$ 的第三行，$\mathbf{O}$ 可以用四元数 $\mathbf{q}$ 表示：

$$
\mathbf{O} = 2
\begin{pmatrix}
 q_{0}^{2} + q_{1}^{2} - 1/2 & q_{1}q_{2} + q_{0}q_{3} & q_{1}q_{3} - q_{0}q_{2} \\
 q_{1}q_{2} - q_{0}q_{3} & q_{0}^{2} + q_{2}^{2} - 1/2 & q_{2}q_{3} + q_{0}q_{1} \\
 q_{1}q_{3} + q_{0}q_{2} & q_{2}q_{3} - q_{0}q_{1} & q_{0}^{2} + q_{3}^{2} - 1/2
\end{pmatrix}
$$

## 曲面约束

我们在本节中考虑曲面的约束。假设曲面由参数 $(u,v)$ 表示，变形构型可以表示为：$\mathbf{r}=\mathbf{r}(s)=\mathbf{r}(u(s),v(s))$，最终法向量可以写为：

$$
\mathbf{e}_2=\frac{\mathbf{r}_u\times\mathbf{r}_v}{||\mathbf{r}_u\times\mathbf{r}_v||},
$$

其中 $\mathbf{r}_u=\partial_u \mathbf{r}$，$\mathbf{r}_v=\partial_v\mathbf{r}$。旋转角可以表示为 $\cos\phi=\mathbf{e}_2\cdot\mathbf{d}_2$，且 $\mathbf{e}_2$ 与 $\mathbf{O}$ 的关系为：

$$
\mathbf{e}_2=\mathbf{O}_2^{\mathsf{T}}
$$

$\kappa_g$、$\kappa_n$ 和 $\tau_g$ 也可以用曲面参数表示：

$$
\begin{aligned}
\kappa_{g}(s) = &\sqrt{\frac{E G-F^{2}}{\left(E u_s^{2}+2 F u_s v_s+G v_s^{2}\right)^{3}}}\times \left[ \Gamma_{11}^{2} u_s^{3} - \Gamma_{22}^{1} v_s^{3} + \left( 2\Gamma_{12}^{2} - \Gamma_{11}^{1} \right) u_s^2 v_s - \left( 2\Gamma_{12}^{1} - \Gamma_{22}^{2} \right) u_s v_s^2 + u_s v_{ss} - u_{ss} v_s \right]
\end{aligned}
$$

其中 $(\cdot{}){ss}=\partial^2(\cdot)/\partial_s^2$，$\Gamma_{\alpha \beta}^{\gamma}=\frac{1}{2}g^{\gamma \theta}(\frac{\partial g_{\theta \alpha}}{\partial x^{\beta}}+\frac{\partial g_{\theta \beta}}{\partial x^{\alpha}}-\frac{\partial g_{\alpha\beta}}{\partial x^{\theta}})$ 为Christoffel符号。

$$
\kappa_{n}(s) = \frac{L u_s^{2} + 2M u_s v_s + N v_s^{2}}{E u_s^{2} + 2F u_s v_s + G v_s^{2}},
$$

$$
\tau_{g}(s) = \frac{(M E - LF) u_s^{2} + (NE - LG) u_s v_s + (NF - MG) v_s^{2}}{\left(E u_s^{2} + 2F u_s v_s + G v_s^{2}\right) \sqrt{EG - F^{2}}},
$$

其中 $E,F,G$ 是曲面的第一基本形式，$L,M,N$ 是曲面的第二基本形式。

## Kirchhoff杆

Kirchhoff杆的平衡方程可以写为：

$$
\begin{aligned} \mathbf{F}_s+\mathbf{f}&=0\\ \mathbf{M}_s + \mathbf{d}_3\times\mathbf{F}+\mathbf{m} &=0\end{aligned}
$$

我们将 $\mathbf{F}$ 和 $\mathbf{M}$ 在曲面标架 $\mathbf{e}$ 中展开，分量方程最终可以写为：

$$
\begin{aligned} \mathbf{\bar{F}}_s+\mathbf{\bar{F}}\mathbf{\Gamma}+\mathbf{\bar{f}}&=0 \\ \mathbf{\bar{M}}_s+\mathbf{\bar{M}}\mathbf{\Gamma}+\mathbf{\bar{F}}\mathbf{\Lambda}+\mathbf{\bar{m}}&=0\end{aligned}
$$

$$
\mathbf{\Lambda} =\begin{pmatrix} 0 & 1 &0 \\ -1 & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}
$$

其中 $\mathbf{\Lambda}$ 是叉积矩阵。带有 $\bar{(\cdot)}$ 的变量表示在 $\mathbf{e}$ 中的分量形式，例如 $\mathbf{\bar{F}}=\{F_1,F_2,F_3\} \left( \begin{array}{c} \mathbf{e}_1 \\ \mathbf{e}_2 \\ \mathbf{e}_3\end{array}\right)$。

## 本构关系

对于Kirchhoff杆，我们仅考虑弯曲变形，本构关系可以写为：

$$
\mathbf{M}=(\mathbf{\omega}-\mathbf{\omega}_0)\mathbf{S}\mathbf{d}=(\mathbf{\omega}-\mathbf{\omega}_0)\mathbf{S}\mathbf{R^T}\mathbf{e}
$$

其中 $\mathbf{S}= \operatorname{diag}(\{\mathrm{EI}_1,\mathrm{EI}_2,\mathrm{GJ}\})$，$\mathrm{EI}_1$ 是沿 $\mathbf{d}_1$ 的抗弯刚度，$\mathrm{EI}_2$ 是沿 $\mathbf{d}_2$ 的抗弯刚度，$\mathrm{GJ}$ 是抗扭刚度。

本构关系最终可以写为：

$$
\mathbf{\bar{M}}=(\mathbf{\omega}-\mathbf{\omega}_0)\mathbf{S}\mathbf{R^T}
$$

## 总结

我们总结位于曲面上的杆的控制方程：

$$
\begin{cases} \mathbf{\bar{F}}_s+\mathbf{\bar{F}}\mathbf{\Gamma}+\mathbf{\bar{f}}=0 \\ \mathbf{\bar{M}}_s+\mathbf{\bar{M}}\mathbf{\Gamma}+\mathbf{\bar{F}}\mathbf{\Lambda}+\mathbf{\bar{m}}=0  \\ \mathbf{\bar{M}}=(\operatorname{ax}(\mathbf{\Omega})-\operatorname{ax}(\mathbf{\Omega}_0))\mathbf{S}\mathbf{R^T} \\ 
\mathbf{q}_s=\mathbf{Q}\mathbf{q}\\
\mathbf{r}_s=\mathbf{O}_3^{\mathsf{T}}\\
\mathbf{e}_2=\frac{\mathbf{r}_u\times\mathbf{r}_v}{||\mathbf{r}_u\times\mathbf{r}_v||}=\mathbf{O}_2^{\mathsf{T}}\\
\mathbf{\Omega}=\mathbf{R}_s\mathbf{R^T}+\mathbf{R}\mathbf{\Gamma}\mathbf{R^T}\\
\mathbf{\Gamma}=\mathbf{\Gamma}(u(s),v(s))\\
\end{cases}
$$

## 数值求解的分量形式

分量形式可以写为：

$$
\begin{cases}(F_1)_s+F_3\omega_2-F_2\omega_3=0\\
(F_2)_s+F_1\omega_3-F_3\omega_1+p=0\\
(F_3)_s+F_2\omega_1 -F_1\omega_2=0\\
(M_1)_s+M_3\omega_2-M_2\omega_3-F_2=0\\
(M_2)_s+M_1\omega_3-M_3\omega_1+F_1=0\\
(M_3)_s+M_2\omega_1 -M_1\omega_2=0\\
\omega_3=\tau_g+(\phi)_s\\\omega_2=\kappa_g\cos\phi+\kappa_n\sin\phi\\
\omega_1=\kappa_g\sin\phi-\kappa_n\cos\phi\\
M_1=\mathrm{EI}_1(\omega _1-\bar{\omega}_1)\\
M_2=\mathrm{EI}_2(\omega _2-\bar{\omega}_2)\\
M_3=\mathrm{GJ}(\omega _3-\bar{\omega}_3) \\
\left( q_0 \right)_s=-\frac12\left( q_1\omega_{1}+q_2\omega_{2}+q_3\omega_{3} \right)\\
\left( q_1 \right)_s=\frac12\left( q_0\omega_{1}-q_3\omega_{2}+q_2\omega_{3} \right)\\
\left( q_2 \right)_s=\frac12\left( q_3\omega_{1}+q_0\omega_{2}-q_1\omega_{3} \right)\\
\left( q_3 \right)_s=\frac12\left( q_1\omega_{2}-q_2\omega_{1}+q_0\omega_{3} \right)\\


\mathbf{r}_u (u(s))_s+\mathbf{r}_v (v(s))_s=\mathbf{O}_3^{\mathsf{T}}=2\{ q_{1}q_{3} + q_{0}q_{2}, q_{2}q_{3} - q_{0}q_{1}, q_{0}^{2} + q_{3}^{2} - 1/2 \}^T\\

\kappa_{g}(s) = \sqrt{\frac{E G-F^{2}}{\left(E u_s^{2}+2 F u_s v_s+G v_s^{2}\right)^{3}}}\times \left[ \Gamma_{11}^{2} u_s^{3} - \Gamma_{22}^{1} v_s^{3} + \left( 2\Gamma_{12}^{2} - \Gamma_{11}^{1} \right) u_s^2 v_s - \left( 2\Gamma_{12}^{1} - \Gamma_{22}^{2} \right) u_s v_s^2 + u_s v_{ss} - u_{ss} v_s \right]\\
\kappa_{n}(s) = \frac{L u_s^{2} + 2M u_s v_s + N v_s^{2}}{E u_s^{2} + 2F u_s v_s + G v_s^{2}}\\
\tau_{g}(s) = \frac{(M E - LF) u_s^{2} + (NE - LG) u_s v_s + (NF - MG) v_s^{2}}{\left(E u_s^{2} + 2F u_s v_s + G v_s^{2}\right) \sqrt{EG - F^{2}}}\\
\end{cases}
$$

根据弧长约束 $E u_s^2+2Fu_sv_s+Gv_s^2=1$，分量方程可以简化为：

$$
\begin{cases}(F_1)_s+F_3\omega _2-F_2\omega _3=0
\\
(F_3)_s+F_2\omega _1-F_1\omega _2=0
\\
(M_2)_s+M_1\omega _3-M_3\omega _1+F_1=0
\\
(M_3)_s+M_2\omega _1-M_1\omega _2=0
\\
(\phi )_s=\tau _g-\omega _3
\\
(\kappa_n)_s=(\omega_2\sin\phi-\omega_1\cos\phi)_s
\\
\left( q_0 \right) _s=-\frac{1}{2}\left( q_1\omega _1+q_2\omega _2+q_3\omega _3 \right) 
\\
\left( q_1 \right) _s=\frac{1}{2}\left( q_0\omega _1-q_3\omega _2+q_2\omega _3 \right) 
\\
\left( q_2 \right) _s=\frac{1}{2}\left( q_3\omega _1+q_0\omega _2-q_1\omega _3 \right) 
\\
\left( q_3 \right) _s=\frac{1}{2}\left( q_1\omega _2-q_2\omega _1+q_0\omega _3 \right) 
\\
\mathbf{r}_u(u(s))_s+\mathbf{r}_v(v(s))_s={\mathbf{O}_3}^{\mathbf{T}}=2\{q_1q_3+q_0q_2,q_2q_3-q_0q_1,q_{0}^{2}+q_{3}^{2}-1/2\}^T\end{cases}
$$

需要求解的变量为 $\{F_1,F_3,\phi,\omega_1,\omega_2,\omega_3,q_0,q_1,q_2,q_3,u,v\}$

其他变量可以表示为：

$$
\begin{cases}F_2=(M_1)_s+M_3\omega _2-M_2\omega _3
\\
M_1=\mathrm{EI}_1(\omega _1-\bar{\omega}_1)
\\
M_2=\mathrm{EI}_2(\omega _2-\bar{\omega}_2)
\\
M_3=\mathrm{GJ}(\omega _3-\bar{\omega}_3)
\\
\kappa _g(s)=\sqrt{EG-F^2}\times \left[ \Gamma _{11}^{2}u_{s}^{3}-\Gamma _{22}^{1}v_{s}^{3}+\left( 2\Gamma _{12}^{2}-\Gamma _{11}^{1} \right) u_{s}^{2}v_s-\left( 2\Gamma _{12}^{1}-\Gamma _{22}^{2} \right) u_sv_{s}^{2}+u_sv_{ss}-u_{ss}v_s \right] 
\\
\kappa _n(s)=Lu_{s}^{2}+2Mu_sv_s+Nv_{s}^{2}
\\
\tau _g(s)=\frac{(ME-LF)u_{s}^{2}+(NE-LG)u_sv_s+(NF-MG)v_{s}^{2}}{\sqrt{EG-F^2}}
\\
p=F_3\omega _1-(F_2)_s-F_1\omega _3
\\
\kappa _g=\omega _2\cos \phi +\omega_1\sin \phi\end{cases}
$$

## 特殊情况

现在考虑一些特殊情况：我们考虑圆柱体约束的半圆形欧拉屈曲和球面约束的半圆形欧拉屈曲。

对于圆柱体，参数方程和曲率可以写为：

$$
\mathbf{r}(s)=\{R \cos u_1(s), R\sin u_1(s), R u_2(s)\}
$$

测地曲率、法曲率和测地挠率可以表示为：

$$
\begin{array}{l}
\kappa_g = R^2 (u_1'(s)u_2''(s)-u_2'(s)u_1''(s)) \\
\kappa_n = R u_2'(s)^2 - 1/R \\
\tau_g = R u_1'(s)u_2'(s)
\end{array}
$$

控制方程可以简化为：

$$
\begin{cases}
	(F_1)_s+F_3\omega _2-F_2\omega _3=0\\
	(F_3)_s+F_2\omega _1-F_1\omega _2=0\\
	(M_2)_s+M_1\omega _3-M_3\omega _1+F_1=0\\
	(M_3)_s+M_2\omega _1-M_1\omega _2=0\\
	(\phi )_s=\tau _g-\omega _3\\
	\left( \omega _1 \right) _s=\left( \left( \omega _2-\kappa _n \right) /\cos \phi \right) _s\\
	\left( q_0 \right) _s=-\frac{1}{2}\left( q_1\omega _1+q_2\omega _2+q_3\omega _3 \right)\\
	\left( q_1 \right) _s=\frac{1}{2}\left( q_0\omega _1-q_3\omega _2+q_2\omega _3 \right)\\
	\left( q_2 \right) _s=\frac{1}{2}\left( q_3\omega _1+q_0\omega _2-q_1\omega _3 \right)\\
	\left( q_3 \right) _s=\frac{1}{2}\left( q_1\omega _2-q_2\omega _1+q_0\omega _3 \right)\\
	(u)_s =-\frac{2\csc \left( u\left( s \right) \right) \left( q_0\left( s \right) q_2\left( s \right) +q_1\left( s \right) q_3\left( s \right) \right)}{R}\\
	(v)_s =\frac{2\left( q_0\left( s \right) ^2+q_3\left( s \right) ^2-1/2 \right)}{R}\\
\end{cases}
$$

对于球面，参数方程和曲率可以写为：

$$
\mathbf{r}(s)=\{R \sin u_1(s)\cos u_2(s), R\sin u_1(s)\sin u_2(s), R \cos u_1(s)\}
$$

测地曲率、法曲率和测地挠率可以表示为：

$$
\begin{array}{l}
\kappa_g = R^2\sin u_1\bigl[ u_1' u_2'' -u_2' u_1'' -(u_2' )^3\sin u_1\cos u_1 \bigr] +2\cos u_1\,u_2' \\
\kappa_n = -1/R \\
\tau_g = 0
\end{array}
$$
