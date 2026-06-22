---
title: "壳理论中的几何"
date: 2025-05-30
tags:
  - Geometric Elasticity
  - Shell
lang: zh
ref: geometry-in-shell-theory
permalink: /zh/2025/05/geometry-in-shell-theory/
---

本文基于[P. Ciarlet的工作](https://link.springer.com/article/10.1007/s10659-005-4738-8)介绍弹性壳的几何理论。
<!-- more -->

我们旨在利用微分几何推导弹性壳的一般理论。主要挑战在于壳的自然曲率引起的复杂几何，这使应变与位移之间的关系变得复杂，尤其是在大转动情况下。本文发展了一个数学框架来系统地计算这种关系。

## 1. 几何基础与应变定义

我们首先建立描述壳形态的几何框架，并定义关键的应变度量。

壳面由 $\mathbf{r}(x_1,x_2)$ 参数化，基向量定义为：

$$
\mathbf{a}_\alpha=\frac{\partial \mathbf{r}}{\partial x_\alpha}, \quad 
\mathbf{n}=\frac{\mathbf{a}_1\times\mathbf{a}_2}{\|\mathbf{a}_1\times\mathbf{a}_2\|}
$$

表征曲面几何的基本形式包括：

- **第一基本形式**（度量张量）：$a_{\alpha\beta}=\partial_\alpha \mathbf{a} \cdot \partial_\beta \mathbf{a}$

- **第二基本形式**（曲率张量）：$b_{\alpha\beta}=\partial_\alpha\mathbf{a}_\beta\cdot\mathbf{n}$

壳的几何相对于其中面描述：

$$
\mathbf{x}(x_1,x_2,x_3)=\mathbf{r}(x_1,x_2)+x_3\mathbf{n}
$$

基于这些几何量，我们定义两个基本的应变度量：

- **薄膜应变：** $\varepsilon_{\alpha\beta}^s=\frac{1}{2}(a_{\alpha\beta}-\bar{a}_{\alpha\beta})$
- **弯曲应变：** $\varepsilon_{\alpha\beta}^b=b_{\alpha\beta}-\bar{b}_{\alpha\beta}$

其中上划线表示参考构型中的量。

## 2. 平衡方程的变分推导

我们现在通过变分原理推导控制方程和边界条件，通过考虑系统的能量变分来建立平衡条件。

**应变的变分**构成能量表达式的核心。薄膜应变变分为：

$$
\delta\varepsilon_{\alpha\beta}^s=\frac{1}{2}(\mathbf{a}_\alpha\cdot\delta\mathbf{a}_\beta+\mathbf{a}_\beta\cdot\delta\mathbf{a}_\alpha)
$$

弯曲应变变分涉及更复杂的推导：

$$
\begin{aligned}
\delta\varepsilon_{\alpha\beta}^b&=\delta b_{\alpha\beta}=\delta(\partial_{\alpha\beta}\mathbf{r}\cdot\mathbf{n}) \\
&=\partial_{\alpha\beta}\delta\mathbf{r}\cdot\mathbf{n}-\Gamma_{\alpha\beta}^{\gamma}\mathbf{n}\cdot\delta\mathbf{a}_\gamma
\end{aligned}
$$

**弹性应变能的变分**表示为：

$$
\delta U_e=\int_\mathcal{S}(n^{\alpha\beta}\delta\varepsilon_{\alpha\beta}^s+m^{\alpha\beta}\delta\varepsilon_{\alpha\beta}^b)\sqrt{|a|}dx_1dx_2
$$

代入应变变分得到：

$$
\delta U_e=\int_\mathcal{S} \left[A^{\alpha\beta}\mathbf{a}_\alpha\cdot\delta\partial_\beta\mathbf{r}+B^{\alpha\beta}\mathbf{n}\cdot\delta\partial_{\alpha\beta}\mathbf{r}-B^{\alpha\beta}\Gamma_{\alpha\beta}^{\gamma}\mathbf{n}\cdot\delta\partial_\gamma\mathbf{r}\right] dx_1dx_2
$$

其中 $A^{\alpha\beta}=n^{\alpha\beta}\sqrt{\|a\|}$ 和 $B^{\alpha\beta}=m^{\alpha\beta}\sqrt{\|a\|}$ 分别表示应力合力和弯矩合力。

**对能量变分表达式应用分部积分**，得到包含区域项和边界项的完整形式：

$$
\begin{aligned}
\delta U_e = & \int_\mathcal{S}\left[\partial_{\alpha\beta}(B^{\alpha\beta}\mathbf{n})+\partial_\gamma(B^{\alpha\beta}\Gamma_{\alpha\beta}^{\gamma}\mathbf{n})-\partial_\beta( A^{\alpha\beta}\mathbf{a}_\alpha)\right]\cdot\delta\mathbf{r}  dx_1dx_2 \\
& + \int_{\partial \mathcal{S}}\left[B^{\alpha\beta}\mathbf{n}\cdot\delta\mathbf{a}_\alpha +(A^{\alpha\beta}\mathbf{a}_\alpha-B^{\alpha\gamma}\Gamma_{\alpha\gamma}^\beta \mathbf{n}-\partial_{\alpha}(B^{\alpha\beta}\mathbf{n}))\cdot \delta\mathbf{r}\right]n_\beta ds
\end{aligned}
$$

**利用高斯-温加滕方程简化**：

$$
\partial_\beta \mathbf{a}_\alpha = \Gamma_{\beta\alpha}^{\gamma}\mathbf{a}_\gamma + b_{\alpha\beta}\mathbf{n}, \quad 
\partial_\alpha\mathbf{n} = -b^{\gamma}_{\alpha}\mathbf{a}_\gamma
$$

得到含完整边界项的最终简化变分表达式：

$$
\begin{aligned}
\delta U_e = & \int_{\mathcal{S}}\left[(\partial_{\beta}C^{\beta}+b_{\beta\gamma}D^{\beta\gamma})\mathbf{n}+(\partial_{\beta}D^{\beta\gamma}+\Gamma_{\theta\beta}^{\gamma}D^{\beta\theta}-b_{\beta}^{\gamma}C^{\beta})\mathbf{a}_{\gamma}\right]\cdot \delta\mathbf{r}dx_1dx_2 \\
& + \int_{\partial \mathcal{S}}\left[ B^{\alpha\beta}\mathbf{n}\cdot \delta\mathbf{a}_{\alpha}-\left( D^{\gamma\beta}\mathbf{a}_{\gamma}+C^{\beta}\mathbf{n} \right) \cdot \delta\mathbf{r} \right] n_{\beta}ds
\end{aligned}
$$

其中引入简化符号：

$$
C^{\beta} = \partial_{\alpha}B^{\alpha\beta} + \Gamma_{\alpha\gamma}^{\beta}B^{\alpha\gamma} = \sqrt{|a|} \nabla_{\alpha} m^{\beta\alpha}=\sqrt{|a|}q^{\beta}
$$

$$
D^{\beta\gamma} = -\left( b_{\alpha}^{\gamma}B^{\alpha\beta} + A^{\gamma\beta} \right) = -\sqrt{|a|}(b_\alpha^\gamma m^{\alpha\beta} + s^{\gamma\beta}) = -\sqrt{|a|}p^{\gamma\beta}
$$

其中 $q^\beta$ 是有效剪切力。

**从驻值条件**，我们得到完整的平衡方程和边界条件组：

**$\mathcal{S}$ 上的场方程：**

$$
\begin{aligned}
\partial_{\beta}C^{\beta} + b_{\beta\gamma}D^{\beta\gamma} &= f^n\sqrt{|a|} \\
\partial_{\beta}D^{\beta\gamma} + \Gamma_{\theta\beta}^{\gamma}D^{\beta\theta} - b_{\beta}^{\gamma}C^{\beta} &= f^{\gamma}\sqrt{|a|}
\end{aligned}
$$

**$\partial\mathcal{S}$ 上的自然边界条件：**

$$
\begin{aligned}
B^{\alpha\beta}n_\alpha n_\beta &= 0 \quad \text{(弯矩条件)} \\
(D^{\gamma\beta}\mathbf{a}_\gamma + C^\beta \mathbf{n})n_\beta &= 0 \quad \text{(力合力条件)}
\end{aligned}
$$

**平衡方程的最终形式：**

壳的平衡方程最终可以简化为：

$$
\begin{aligned}
\partial_\alpha m^{\alpha\beta}+\Gamma^{\beta}_{\alpha\gamma}m^{\alpha\gamma}+\Gamma^{\alpha}_{\alpha\gamma}m^{\beta\gamma}=q^{\beta}\\
\partial_\beta q^{\beta}+\Gamma^{\alpha}_{\alpha \beta}q^{\beta}-g_{\gamma\beta} b_\alpha^{\gamma}p^{\alpha\beta}=f^n\\
\partial_\beta p^{\beta\gamma}+\Gamma_{\theta\beta}^{\gamma}p^{\beta\theta}+\Gamma_{\alpha\beta}^{\alpha}p^{\beta\gamma}+b_{\beta}^{\gamma}q^{\beta}=f^{\gamma}
\end{aligned}
$$

自然边界条件表示为：

$$
\begin{aligned}
m^{\alpha\beta}n_\alpha n_\beta &= 0 \quad \text{(弯矩条件)} \\
(q^\beta \mathbf{n}-p^{\gamma\beta}\mathbf{a}_\gamma)n_\beta &= 0 \quad \text{(力合力条件)}
\end{aligned}
$$

这些方程可以进一步简化为更紧凑的张量形式，但上述公式明确显示了所有边界贡献。

## 3. 应变-位移关系与本构定律

我们通过建立应变-位移关系和材料本构方程来完善理论框架。

**位移场**定义为：

$$
\mathbf{u} = \mathbf{x} - \bar{\mathbf{x}} = u^{\alpha}\mathbf{a}_\alpha + w\mathbf{n}
$$

**薄膜应变**的推导涉及变形切向量和度量张量：

$$
\mathbf{a}_\alpha = \bar{\mathbf{a}}_\alpha + \mathbf{u}_{,\alpha}, \quad 
a_{\alpha\beta} = \bar{a}_{\alpha\beta} + \mathbf{a}_\alpha\cdot\mathbf{u}_{,\beta} + \mathbf{a}_\beta\cdot\mathbf{u}_{,\alpha} + \mathbf{u}_{,\alpha}\cdot\mathbf{u}_{,\beta}
$$

利用几何关系 $\mathbf{a}_{\alpha,\beta} = \Gamma_{\alpha\beta}^{\gamma}\mathbf{a}_{\gamma} - b_{\alpha\beta}\mathbf{n}$，我们得到格林-拉格朗日应变张量：

$$
\varepsilon_{\alpha\beta}^s = \frac{1}{2}(u_{\alpha,\beta}+u_{\beta,\alpha}+w_{,\alpha}w_{,\beta}) - \Gamma_{\alpha\beta}^{\gamma}u_{\gamma} - b_{\alpha\beta}w
$$

**对于弯曲应变**，对变形法向量和曲率张量的分析得到线性化表达式：

$$
\varepsilon_{\alpha\beta}^b \approx w_{,\alpha\beta} - w_{,\gamma}\Gamma_{\alpha\beta}^{\gamma} - w b_\alpha^{\gamma}b_{\gamma\beta}
$$

**本构关系**完善了理论框架。壳的总应变结合了薄膜和弯曲分量：

$$
\varepsilon_{\alpha\beta} = \varepsilon_{\alpha\beta}^s + x_3\varepsilon_{\alpha\beta}^b
$$

**弹性应变能密度**由下式给出：

$$
U_e = \frac{1}{2}\int_{\mathcal{S}}\mathcal{A}^{\alpha\beta\gamma\delta}(\mathcal{D}\varepsilon_{\alpha\beta}^s\varepsilon_{\gamma\delta}^s + \mathcal{B}\varepsilon_{\alpha\beta}^b\varepsilon_{\gamma\delta}^b)dS
$$

其中材料刚度系数为：

$$
\mathcal{D} = \frac{Eh}{1-\nu^2}, \quad \mathcal{B} = \frac{Eh^3}{12(1-\nu^2)}
$$

弹性张量为：

$$
\mathcal{A}^{\alpha\beta\gamma\delta} = \nu a^{\alpha\beta}a^{\gamma\delta} + \frac{1-\nu}{2}(a^{\alpha\gamma}a^{\beta\delta} + a^{\alpha\delta}a^{\beta\gamma})
$$

**应力合力**由本构关系确定：

$$
s^{\alpha\beta} = \mathcal{D}\mathcal{A}^{\alpha\beta\gamma\delta}\varepsilon_{\gamma\delta}^s, \quad 
m^{\alpha\beta} = \mathcal{B}\mathcal{A}^{\alpha\beta\gamma\delta}\varepsilon_{\gamma\delta}^b
$$

这完成了弹性壳的一般理论框架，为分析各种加载条件下的壳变形和应力提供了全面的基础，特别关注边界条件的正确处理。

## 4. 轴对称情况

我们考虑轴对称壳的特殊情况，可以利用对称性来简化方程。轴对称壳的几何由两个参数描述：截面曲线的弧长 $s$ 和旋转角 $\phi$。假设截面圆的半径为 $R(s)$，壳的形状可以写为：

$$
\mathbf{x}=\{R(s)\cos\phi, R(s)\sin\phi, z(s)\},
$$

其中 $z(s)$ 是垂直坐标。我们将截面曲线的倾角定义为 $\psi$，有：

$$
\frac{d}{ds}R(s) = \cos\psi(s), \quad
\frac{d}{ds}z(s) = \sin\psi(s)
$$

克里斯托费尔符号的非零分量为：

$$
\Gamma^{\phi}_{s \phi} = \frac{\cos\psi(s)}{R(s)},
\quad
\Gamma^{s}_{\phi \phi} = -R(s)\cos \psi(s)
$$

控制方程可以简化为：

$$
\begin{aligned}
\partial_s m^{ss}+\Gamma^{s}_{\phi\phi}m^{\phi\phi}+\Gamma^{\phi}_{\phi s}m^{ss}=q^{s}\\
\partial_s q^{s}+\Gamma^{\phi}_{\phi s}q^{s}-(g_{ss} b_s^{s}p^{ss}+g_{\phi\phi} b_\phi^{\phi}p^{\phi\phi})=f^n\\
\partial_s p^{ss}+\Gamma_{\phi\phi}^{s}p^{\phi\phi}+\Gamma_{\phi s}^{\phi}p^{s s}+b_{s}^{s}q^{s}=f^{\gamma}\\
n^{ss}+b_{s}^{s}m^{ss}=p^{ss}
\\
n^{\phi\phi}+b_{\phi}^{\phi}m^{\phi\phi}=p^{\phi\phi}
\end{aligned}
$$

轴对称情况的本构规律为：

$$
\begin{aligned}
n_{s}^{s} &= S\left[\left(1-a^{s s}\bar{a}_{s s}\right)+\nu\left(1-a^{\phi\phi}\bar{a}_{\phi\phi}\right)\right], \\
n_{\phi}^{\phi} &= S\left[\left(1-a^{\phi\phi}\bar{a}_{\phi\phi}\right)+\nu\left(1-a^{s s}\bar{a}_{s s}\right)\right], \\
m_{s}^{s} &= B\left[\left(\kappa_{s}-a^{s s}\bar{a}_{s s}\bar{\kappa}_{s}\right)+\nu\left(\kappa_{\phi}-a^{\phi\phi}\bar{a}_{\phi\phi}\bar{\kappa}_{\phi}\right)\right], \\
m_{\phi}^{\phi} &= B\left[\left(\kappa_{\phi}-a^{\phi\phi}\bar{a}_{\phi\phi}\bar{\kappa}_{\phi}\right)+\nu\left(\kappa_{s}-a^{s s}\bar{a}_{s s}\bar{\kappa}_{s}\right)\right],
\end{aligned}
$$

最终轴对称壳的控制方程可以写为：

$$
\begin{aligned}
M_{ss}' &= Q + \frac{\cos\psi}{R}(M_{pp} - M_{ss}) \\
Q' &= f_n + \frac{N_{pp} \sin\psi}{R} + \frac{M_{pp} \sin^2\psi}{R^2} + \frac{N_{ss} \psi'}{R} + \frac{M_{ss} (\psi')^2}{R} - \frac{\cos\psi}{R^2}Q \\
(N_{ss} + M_{ss} \psi')' &= f_s + \frac{N_{pp} \cos\psi}{R} + \frac{M_{pp} \sin\psi \cos\psi}{R^2} - \frac{\cos\psi}{R^2}(N_{ss} + M_{ss} \psi') - \frac{Q \psi'}{R} \\
S \nu \left(1 - \frac{R_0^2}{R^2} \right) &= N_{ss} \\
S &= N_{pp} + \frac{S R_0^2}{R^2} \\
B \left( \frac{\nu \sin\psi}{R} - \frac{\nu R_0 \sin\psi_0}{R^2} + \psi' - \psi_0' \right) &= M_{ss} \\
B \left( \frac{\sin\psi}{R} - \frac{R_0 \sin\psi_0}{R^2} + \nu (\psi' - \psi_0') \right) &= M_{pp}
\end{aligned}
$$

几何可以通过以下方式恢复：

$$
\begin{aligned}
R' &= \cos\psi \\
z' &= \sin\psi
\end{aligned}
$$
