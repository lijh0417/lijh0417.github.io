---
title: "Some Fragmented Mathematical Notes"
date: 2022-10-06 12:37:47
mathjax: true
tags:
  - Mathematics
  - Geometric Elasticity
---

Some fragmented mathematical notes.

<!--more-->

## Geometry

### Notes on Classical Curve Theory

传统微分几何对曲线论的介绍中常以 Frenet 标架引入（具有几何直观），但是如何以张量的观点看待曲线论呢？

#### 定义

Frame 指一组向量 $\{ \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3 \}$，满足

$$
\begin{cases}
\frac{d\mathbf{e}_i}{ds} = \Gamma_i^{\,j}\mathbf{e}_j, \\
\mathbf{e}_i \cdot \mathbf{e}_j = \delta_{ij}.
\end{cases}
$$

#### 性质

由上式可以推出如下性质。

#### 1. $\Gamma_j^{\,i} + \Gamma_i^{\,j} = 0$

$$
\frac{d}{ds}\left( \mathbf{e}_i \cdot \mathbf{e}_j \right)
= \mathbf{e}_i \cdot \frac{d\mathbf{e}_j}{ds}
+ \frac{d\mathbf{e}_i}{ds} \cdot \mathbf{e}_j
= \Gamma_j^{\,i} + \Gamma_i^{\,j}
= 0.
$$

#### 2. $\{ \Omega, \omega, \Gamma \}$ 之间的关系

$$
\frac{d\mathbf{e}_j}{ds}
= \mathbf{\omega} \times \mathbf{e}_j
= \mathbf{\Omega} \cdot \mathbf{e}_j.
$$

$$
\mathbf{e}_i \times \frac{d\mathbf{e}_i}{ds}
= \mathbf{e}_i \times \left( \mathbf{\omega} \times \mathbf{e}_i \right)
= 3\mathbf{\omega} - \omega_i \mathbf{e}_i
= 2\mathbf{\omega}
= \epsilon_{ijk}\Gamma_i^{\,j}\mathbf{e}_k.
$$

因此

$$
\mathbf{\omega} = \frac{1}{2}\epsilon_{ijk}\Gamma_i^{\,j}\mathbf{e}_k.
$$

对于 Frenet 标架：

$$
\mathbf{\omega} = \kappa \mathbf{e}_3 + \tau \mathbf{e}_1.
$$

对于 Bishop 标架：

$$
\mathbf{\omega} = \kappa_1 \mathbf{b}_2 - \kappa_2 \mathbf{b}_1.
$$

若 $\mathbf{\Omega} \cdot \mathbf{a} = \mathbf{\omega} \times \mathbf{a}$，则有

$$
\begin{cases}
\frac{1}{2}\mathbf{\epsilon} : \mathbf{\Omega} + \mathbf{\omega} = 0, \\
\mathbf{\epsilon} \cdot \mathbf{\omega} + \mathbf{\Omega} = 0.
\end{cases}
$$

结合上述表达式：

$$
\Omega_{ij}
= -\frac{\epsilon_{ijk}\epsilon_{ijk}\Gamma_i^{\,j}}{2}
= -\delta_{kk}\Gamma_i^{\,j}
= -\Gamma_i^{\,j}.
$$

注意这里 $\delta$ 不求和。

可以得到如下结论：

$$
\begin{cases}
\mathbf{\Omega} + \mathbf{\Gamma} = 0, \\
\mathbf{\Gamma} = \mathbf{\epsilon} \cdot \mathbf{\omega}, \\
\mathbf{\omega} = \dfrac{1}{2}\mathbf{\epsilon} : \mathbf{\Gamma}, \\
\dfrac{1}{2}\mathbf{\epsilon} : \mathbf{\Omega} + \mathbf{\omega} = 0, \\
\mathbf{\epsilon} \cdot \mathbf{\omega} + \mathbf{\Omega} = 0.
\end{cases}
$$

可以发现 Darboux 矢量和旋转张量 $\mathbf{\Omega}$ 完全是由 $\mathbf{\Gamma}$ 和 $\mathbf{\epsilon}$ 诱导出来的。

因此说 Frenet 方程决定了曲线的内禀结构。

#### 3. Bishop、Frenet、Material frame 之间的关系

$$
\begin{cases}
\frac{d\mathbf{e}_i}{ds} = \Gamma_i^{\,j}\mathbf{e}_j, \\
\mathbf{e}_i \cdot \mathbf{e}_j = \delta_{ij}.
\end{cases}
$$

考虑 $\mathbf{p}_i = R_i^{\,j}\mathbf{e}_j$，即参考标架之间的转动。

$$
\frac{d\mathbf{p}_i}{ds}
= \Gamma_i^{\,j}\mathbf{p}_j
= \Gamma_i^{\,j} R_j^{\,m}\mathbf{e}_m
= \frac{dR_i^{\,m}}{ds}\mathbf{e}_m
+ R_i^{\,m}\frac{d\mathbf{e}_m}{ds}
= \frac{dR_i^{\,m}}{ds}\mathbf{e}_m
+ R_i^{\,j}{\Gamma_0}_j^{\,m}\mathbf{e}_m.
$$

$$
\frac{d\mathbf{p}_i}{ds} \cdot \mathbf{p}_j
= \Gamma_i^{\,j}
= \frac{dR_i^{\,m}}{ds}R_j^{\,m}
+ R_i^{\,n}{\Gamma_0}_n^{\,m}R_j^{\,m}.
$$

得到重要表达式：

$$
\Gamma_i^{\,j}
= \frac{dR_i^{\,m}}{ds}R_j^{\,m}
+ R_i^{\,n}{\Gamma_0}_n^{\,m}R_j^{\,m}.
$$

考虑转动以及三种形式的标架：

$$
R =
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos\theta & \sin\theta \\
0 & -\sin\theta & \cos\theta
\end{bmatrix},
$$

$$
\frac{dR}{ds}
=
\begin{bmatrix}
0 & 0 & 0 \\
0 & -\sin\theta & \cos\theta \\
0 & -\cos\theta & -\sin\theta
\end{bmatrix}
\theta'(s).
$$

三种 frame 的连接矩阵分别为：

$$
\text{Bishop}\;
\begin{bmatrix}
0 & \kappa_1 & \kappa_2 \\
-\kappa_1 & 0 & 0 \\
-\kappa_2 & 0 & 0
\end{bmatrix},
\qquad
\text{Frenet}\;
\begin{bmatrix}
0 & \kappa & 0 \\
-\kappa & 0 & \tau \\
0 & -\tau & 0
\end{bmatrix},
\qquad
\text{Material}\;
\begin{bmatrix}
0 & m_1 & m_2 \\
-m_1 & 0 & m \\
-m_2 & -m & 0
\end{bmatrix}.
$$

由上式张量方程可以得到：

Bishop 沿 $\mathbf{e}_1$ 轴转动 $\theta$，得到 Frenet 标架，$\theta$ 满足

$$
\begin{cases}
\kappa = \kappa_1 \cos\theta + \kappa_2 \sin\theta, \\
\kappa_1 \sin\theta = \kappa_2 \cos\theta, \\
\theta' = \tau.
\end{cases}
$$

Bishop 沿 $\mathbf{e}_1$ 轴转动 $\theta$，得到 Material 标架，$\theta$ 满足

$$
\begin{cases}
m_1 = \kappa_1 \cos\theta + \kappa_2 \sin\theta, \\
m_2 = -\kappa_1 \sin\theta + \kappa_2 \cos\theta, \\
m = \theta'.
\end{cases}
$$

Frenet 沿 $\mathbf{e}_1$ 轴转动 $\theta$，得到 Material 标架，$\theta$ 满足

$$
\begin{cases}
m_1 = \kappa \cos\theta, \\
m_2 = -\kappa \sin\theta, \\
m = \theta' + \tau.
\end{cases}
$$

### Notes on Classical Surface Theory

#### 曲面基本型

考虑曲面参数方程 $\mathbf{r}(u,v)$，微元线段的度量写为

$$
\mathrm{I} = d\mathbf{r} \cdot d\mathbf{r}
= \mathbf{r}_u \cdot \mathbf{r}_u\,du^2 + 2\mathbf{r}_u \cdot \mathbf{r}_v\,du\,dv + \mathbf{r}_v \cdot \mathbf{r}_v\,dv^2
= E\,du^2 + 2F\,du\,dv + G\,dv^2.
$$

称为第一基本型。

![](../assets/images/2022-10-06-Some%20fragmentaed%20mathematical%20notes/几何弹性/kappa.bmp)

由图中几何关系有

$$
\theta\,ds
= \frac{1}{\rho}ds^2
= \kappa_n\,d\mathbf{r} \cdot d\mathbf{r}
= \kappa_n \mathrm{I}
= d^2\mathbf{r} \cdot \mathbf{n}.
$$

定义 $d^2\mathbf{r} \cdot \mathbf{n} = \mathrm{II}$ 为第二基本型。

$$
\mathrm{II}
= d^2\mathbf{r} \cdot \mathbf{n}
= \left( \partial_u\,du + \partial_v\,dv \right)^2 \mathbf{r} \cdot \mathbf{n}
= \mathbf{r}_{uu}\cdot \mathbf{n}\,du^2 + 2\mathbf{r}_{uv}\cdot \mathbf{n}\,du\,dv + \mathbf{r}_{vv}\cdot \mathbf{n}\,dv^2
= L\,du^2 + 2M\,du\,dv + N\,dv^2.
$$

法曲率 $\kappa_n$ 表示为

$$
\kappa_n = \frac{\mathrm{II}}{\mathrm{I}}.
$$

**总结：**

$$
\begin{cases}
E = \mathbf{r}_u \cdot \mathbf{r}_u, \\
F = \mathbf{r}_u \cdot \mathbf{r}_v, \\
G = \mathbf{r}_v \cdot \mathbf{r}_v, \\
L = \mathbf{r}_{uu} \cdot \mathbf{n} = -\mathbf{r}_u \cdot \mathbf{n}_u, \\
M = \mathbf{r}_{uv} \cdot \mathbf{n} = -\mathbf{r}_u \cdot \mathbf{n}_v = -\mathbf{r}_v \cdot \mathbf{n}_u, \\
N = \mathbf{r}_{vv} \cdot \mathbf{n} = -\mathbf{r}_v \cdot \mathbf{n}_v, \\
\kappa_n
= \dfrac{\mathrm{II}}{\mathrm{I}}
= \dfrac{L\,du^2 + 2M\,du\,dv + N\,dv^2}{E\,du^2 + 2F\,du\,dv + G\,dv^2}.
\end{cases}
$$

显然 $\dfrac{du}{dv}$ 决定了曲面上法曲率的方向。

#### 主曲率、平均曲率、高斯曲率

关注法曲率的极值，令 $du/dv = p$，有

$$
\left( \kappa_n E - L \right)p^2
+ 2\left( \kappa_n F - M \right)p
+ \kappa_n G - N = 0.
$$

二次方程有解，必然 $\Delta \ge 0$，因此

$$
(EG - F^2)\kappa_n^2 - (EN - 2FM + GL)\kappa_n + LN - M^2 \le 0.
$$

由 Cauchy 不等式必然有

$$
(\mathbf{r}_u \cdot \mathbf{r}_v)^2 \le |\mathbf{r}_u|^2 |\mathbf{r}_v|^2,
$$

即 $F^2 \le EG$。二次项系数大于零，二次型小于零，$\kappa_n$ 被限制在两个零点之间。

主曲率的极大极小值分别为

$$
\begin{cases}
\kappa_1 =
\dfrac{
(EN - 2FM + GL)
+ \sqrt{(EN - 2FM + GL)^2 - 4(F^2 - EG)(M^2 - LN)}
}{
2(EG - F^2)
}, \\[1.2em]
\kappa_2 =
\dfrac{
(EN - 2FM + GL)
- \sqrt{(EN - 2FM + GL)^2 - 4(F^2 - EG)(M^2 - LN)}
}{
2(EG - F^2)
}, \\[1.2em]
\dfrac{\kappa_1 + \kappa_2}{2}
= \dfrac{EN - 2FM + GL}{2(EG - F^2)}, \\[1.2em]
\kappa_1 \kappa_2
= \dfrac{LN - M^2}{EG - F^2}.
\end{cases}
$$

其中

$$
K = \kappa_1 \kappa_2
$$

称为高斯曲率，

$$
H = \frac{\kappa_1 + \kappa_2}{2}
$$

称为平均曲率。

#### Gauss Theorem Egregium

$$
\begin{cases}
L = \dfrac{\langle \mathbf{r}_{uu}, \mathbf{r}_u, \mathbf{r}_v \rangle}{EG - F^2}, \\
M = \dfrac{\langle \mathbf{r}_{uv}, \mathbf{r}_u, \mathbf{r}_v \rangle}{EG - F^2}, \\
N = \dfrac{\langle \mathbf{r}_{vv}, \mathbf{r}_u, \mathbf{r}_v \rangle}{EG - F^2}.
\end{cases}
$$

第二基本型的行列式可以写作

$$
LN - M^2
=
\det
\begin{bmatrix}
\mathbf{r}_{uu}\cdot \mathbf{r}_{vv} & \dfrac{E_u}{2} & F_u - \dfrac{E_v}{2} \\
F_v - \dfrac{G_u}{2} & E & F \\
\dfrac{G_v}{2} & F & G
\end{bmatrix}
-
\det
\begin{bmatrix}
\mathbf{r}_{uv}\cdot \mathbf{r}_{uv} & \dfrac{E_v}{2} & \dfrac{G_u}{2} \\
\dfrac{E_v}{2} & E & F \\
\dfrac{G_u}{2} & F & G
\end{bmatrix}.
$$

进一步可化为

$$
LN - M^2
=
\det
\begin{bmatrix}
F_{uv} - \dfrac{E_{vv} + G_{uu}}{2} & \dfrac{E_u}{2} & F_u - \dfrac{E_v}{2} \\
F_v - \dfrac{G_u}{2} & E & F \\
\dfrac{G_v}{2} & F & G
\end{bmatrix}
-
\det
\begin{bmatrix}
0 & \dfrac{E_v}{2} & \dfrac{G_u}{2} \\
\dfrac{E_v}{2} & E & F \\
\dfrac{G_u}{2} & F & G
\end{bmatrix}.
$$

因此高斯曲率只与第一基本型（曲面的度量）有关，意味着当曲面不伸长（由弯曲能主导）时，高斯曲率不变。

#### 曲面的结构方程

类似于 Frenet frame，考虑到 $\mathbf{n}$ 为单位法矢量，切方向与自身垂直，曲面的结构方程可以写为

$$
\begin{cases}
\partial_\alpha \mathbf{r} = \mathbf{r}_\alpha, \\
\mathbf{r}_{\alpha\beta} = \Gamma_{\alpha\beta}^{\,\gamma} \mathbf{r}_\gamma + b_{\alpha\beta} \mathbf{n}, \\
\mathbf{n}_\alpha = -b_\alpha^{\,\gamma} \mathbf{r}_\gamma.
\end{cases}
$$

可以看出，$b$ 就是第二基本型的系数。

考虑导数可交换性，首先对于 $\mathbf{n}$，有

$$
\mathbf{n}_{\alpha\beta} = \mathbf{n}_{\beta\alpha}.
$$

于是

$$
\left( b_{\alpha\beta}^{\,\gamma} + b_\alpha^{\,\xi}\Gamma_{\xi\beta}^{\,\gamma} \right) \mathbf{r}_\gamma
+ b_\alpha^{\,\xi} b_{\xi\beta} \mathbf{n}
=
\left( b_{\beta\alpha}^{\,\gamma} + b_\beta^{\,\xi}\Gamma_{\xi\alpha}^{\,\gamma} \right) \mathbf{r}_\gamma
+ b_\beta^{\,\xi} b_{\xi\alpha} \mathbf{n}.
$$

对比系数得到

$$
\begin{cases}
b_{\alpha\beta}^{\,\gamma} + b_\alpha^{\,\xi}\Gamma_{\xi\beta}^{\,\gamma}
=
b_{\beta\alpha}^{\,\gamma} + b_\beta^{\,\xi}\Gamma_{\xi\alpha}^{\,\gamma}, \\
b_\alpha^{\,\xi} b_{\xi\beta} = b_\beta^{\,\xi} b_{\xi\alpha}.
\end{cases}
$$

上式中第二式自然满足，第一式称为 Codazzi 方程。

对于 $\mathbf{r}$ 有

$$
\mathbf{r}_{\alpha\beta\gamma}
=
\Gamma_{\alpha\beta,\gamma}^{\,\xi}\mathbf{r}_\xi
+ b_{\alpha\beta,\gamma}\mathbf{n}
+ \Gamma_{\alpha\beta}^{\,p}\Gamma_{p\gamma}^{\,\xi}\mathbf{r}_\xi
+ \Gamma_{\alpha\beta}^{\,p} b_{p\gamma} \mathbf{n}
- b_{\alpha\beta} b_\gamma^{\,\xi} \mathbf{r}_\xi.
$$

由 $\mathbf{r}_{\alpha\beta\gamma} = \mathbf{r}_{\alpha\gamma\beta}$，对比系数得到

$$
\begin{cases}
\Gamma_{\alpha\beta,\gamma}^{\,\xi}
+ \Gamma_{\alpha\beta}^{\,p}\Gamma_{p\gamma}^{\,\xi}
- b_{\alpha\beta} b_\gamma^{\,\xi}
=
\Gamma_{\alpha\gamma,\beta}^{\,\xi}
+ \Gamma_{\alpha\gamma}^{\,p}\Gamma_{p\beta}^{\,\xi}
- b_{\alpha\gamma} b_\beta^{\,\xi}, \\[0.6em]
\Gamma_{\alpha\beta}^{\,p} b_{p\gamma} + b_{\alpha\beta,\gamma}
=
\Gamma_{\alpha\gamma}^{\,p} b_{p\beta} + b_{\alpha\gamma,\beta}.
\end{cases}
$$

第一式称为 Gauss 方程，第二式称为 Codazzi 方程。

现在证明上式第二式与前面的 Codazzi 形式相同。

Christoffel 记号可以表示为

$$
g_{\gamma\xi}\Gamma_{\alpha\beta}^{\,\xi}
=
\mathbf{r}_{\alpha\beta} \cdot \mathbf{r}_\gamma
=
\frac{1}{2}
\left(
g_{\beta\gamma,\alpha}
+ g_{\alpha\gamma,\beta}
- g_{\alpha\beta,\gamma}
\right).
$$

记 $g^{\alpha\beta}g_{\beta\gamma} = \delta^\alpha_\gamma$，则有

$$
\Gamma_{\alpha\beta}^{\,\xi}
=
\mathbf{r}_{\alpha\beta}\cdot \mathbf{r}_\gamma\, g^{\xi\gamma}
=
\frac{1}{2} g^{\xi\gamma}
\left(
g_{\beta\gamma,\alpha}
+ g_{\alpha\gamma,\beta}
- g_{\alpha\beta,\gamma}
\right).
$$

Gauss 方程可以记为

$$
{R_{\gamma\alpha\beta}^{\ \ \ \ \xi}}
=
\Gamma_{\alpha\beta,\gamma}^{\,\xi}
- \Gamma_{\alpha\gamma,\beta}^{\,\xi}
+ \Gamma_{\alpha\beta}^{\,p}\Gamma_{p\gamma}^{\,\xi}
- \Gamma_{\alpha\gamma}^{\,p}\Gamma_{p\beta}^{\,\xi}
=
b_{\alpha\beta} b_\gamma^{\,\xi}
- b_{\alpha\gamma} b_\beta^{\,\xi}.
$$

进一步，

$$
R_{\alpha\beta\delta\gamma}
=
g_{\xi\delta} {R_{\alpha\beta}^{\ \ \xi}}_\gamma
=
b_{\alpha\delta} b_{\beta\gamma}
- b_{\alpha\gamma} b_{\beta\delta}.
$$

可以看出黎曼曲率张量具有大对称性，同时具有小反对称性。

由于二维曲面只有两个指标，同时考虑到黎曼曲率张量的小反对称性，因此二维只有一个不为零的黎曼曲率张量：

$$
R_{1212} = b_{11}b_{22} - b_{12}b_{12}.
$$

即二维曲面的 Gauss 方程。

Gauss 曲率表示为

$$
K
=
\frac{LN - M^2}{EG - F^2}
=
\frac{R_{1212}}{EG - F^2}
=
\frac{1}{2} g^{\alpha\delta} g^{\beta\gamma} R_{\alpha\beta\delta\gamma}.
$$

黎曼曲率即为高斯曲率乘以第一基本型的行列式。并且

$$
g^{\alpha\delta} g^{\beta\gamma} R_{\alpha\beta\delta\gamma}
=
g^{\alpha\delta} g^{\beta\gamma}
\left(
b_{\alpha\delta} b_{\beta\gamma}
- b_{\alpha\gamma} b_{\beta\delta}
\right)
=
b_\alpha^{\,\alpha} b_\beta^{\,\beta}
- b_\alpha^{\,\beta} b_\beta^{\,\alpha}
=
\operatorname{tr}(W)^2 - \operatorname{tr}(W^2)
=
2K.
$$

有趣的是板的能量可以写为

$$
\text{energy}
=
\frac{1}{2}D
\left(
\nu\,\operatorname{tr}(W^2)
+ (1-\nu)\operatorname{tr}(W)^2
\right)
=
D\left( \nu(\tau^2 - K) + 2H^2 \right).
$$

#### 能否把杆和板的形式统一起来？

1. 如果把无泊松效应的曲面定义为理想曲面，可以看出同时为理想曲面和极小曲面的弹性曲面能量为零。  
2. 对于理想曲面，平均曲率取极小时能量取极小值，这正是 Marie-Sophie Germain 首次考虑弹性板时的能量形式。此外，数学中寻找的恒平均曲率曲面，正是不考虑泊松效应时的等能量弹性曲面。

#### 曲面结构方程的简化形式

首先考虑 Codazzi 方程：

$$
\Gamma_{\alpha\beta}^{\,p} b_{p\gamma} + b_{\alpha\beta,\gamma}
=
\Gamma_{\alpha\gamma}^{\,p} b_{p\beta} + b_{\alpha\gamma,\beta}.
$$

可以看出 $\beta,\gamma$ 必然不同，此外只有 $12$ 和 $21$ 两种选择。

不妨令 $\beta = 1$，$\gamma = 2$，$\alpha$ 分别等于 $1,2$，得到

$$
\Gamma_{12}^{\,1}L
+ \left( \Gamma_{12}^{\,2} - \Gamma_{11}^{\,1} \right) M
- \Gamma_{11}^{\,2}N
= L_v - M_u,
$$

$$
\Gamma_{22}^{\,1}L
+ \left( \Gamma_{21}^{\,1} - \Gamma_{22}^{\,2} \right) M
- \Gamma_{21}^{\,2}N
= M_v - N_u.
$$

即为 Codazzi--Mainardi 方程。

由黎曼张量的对称性，有

$$
R_{1212} = LN - M^2.
$$

Gauss 方程为

$$
K = \frac{LN - M^2}{EG - F^2}.
$$

Gauss 方程还可以表示为

$$
K
=
\frac{1}{E}
\left(
{\Gamma_{11}^{\,2}}_{,2}
- {\Gamma_{12}^{\,2}}_{,1}
+ \Gamma_{11}^{\,1}\Gamma_{12}^{\,2}
+ \Gamma_{11}^{\,2}\Gamma_{22}^{\,2}
- \Gamma_{12}^{\,1}\Gamma_{11}^{\,2}
- (\Gamma_{12}^{\,2})^2
\right),
$$

$$
K
=
\frac{1}{\sqrt{EG-F^2}}
\left[
\left(
\frac{\sqrt{EG-F^2}}{E}\Gamma_{11}^{\,2}
\right)_{,2}
-
\left(
\frac{\sqrt{EG-F^2}}{E}\Gamma_{12}^{\,2}
\right)_{,1}
\right],
$$

$$
K
=
\frac{1}{\sqrt{EG-F^2}}
\left[
\left(
\frac{\sqrt{EG-F^2}}{G}\Gamma_{22}^{\,1}
\right)_{,1}
-
\left(
\frac{\sqrt{EG-F^2}}{G}\Gamma_{12}^{\,1}
\right)_{,2}
\right].
$$

**Christoffel 记号与 Gauss 参数的关系：**

由

$$
\Gamma_{\alpha\beta}^{\,\xi}
=
\mathbf{r}_{\alpha\beta}\cdot \mathbf{r}_\gamma\, g^{\xi\gamma}
=
\frac{1}{2}g^{\xi\gamma}
\left(
g_{\beta\gamma,\alpha}
+ g_{\alpha\gamma,\beta}
- g_{\alpha\beta,\gamma}
\right)
$$

以及

$$
g^{\alpha\beta}
=
\frac{1}{\det(a)}
\begin{bmatrix}
G & -F \\
-F & E
\end{bmatrix},
$$

有

$$
\Gamma_{11}^{\,1}
=
\frac{GE_u + FE_v - 2FF_u}{2\det(a)},
$$

$$
\Gamma_{12}^{\,1}
=
\Gamma_{21}^{\,1}
=
\frac{GE_v - FG_u}{2\det(a)},
$$

$$
\Gamma_{22}^{\,1}
=
\frac{2GF_v - GG_u - FG_v}{2\det(a)},
$$

$$
\Gamma_{11}^{\,2}
=
\frac{2EF_u - EE_v - FE_u}{2\det(a)},
$$

$$
\Gamma_{12}^{\,2}
=
\Gamma_{21}^{\,2}
=
\frac{EG_u - FE_v}{2\det(a)},
$$

$$
\Gamma_{22}^{\,2}
=
\frac{EG_v + FG_u - 2FF_v}{2\det(a)}.
$$

### Darboux 矢量与旋转张量之间的关系

若矢量 $\mathbf{\omega}$ 与 $\mathbf{\Omega}$ 满足

$$
\mathbf{\omega}\times\vec{u}
=
\mathbf{\Omega}\cdot\vec{u},
$$

则二者满足以下关系式：

$$
\mathbf{\omega} \times \mathbf{u} = \mathbf{\Omega} \cdot \mathbf{u},
$$

$$
\epsilon_{ijk}\omega_i\, u_j\, \vec{e}^{\,k}
=
\Omega_{kj}u_j\, \vec{e}^{\,k},
$$

$$
(\Omega_{ij} + \epsilon_{ijk}\omega_k)u_j \vec{e}^{\,i} = 0.
$$

**分量形式：**

$$
\Omega_{ij} + \epsilon_{ijk}\omega_k = 0,
$$

$$
\epsilon_{ijk}\Omega_{ij} + 2\omega_k = 0.
$$

**张量形式：**

$$
\mathbf{\epsilon} : \mathbf{\Omega} + 2\mathbf{\omega} = 0,
$$

$$
\mathbf{\Omega} + \mathbf{\epsilon}\cdot\mathbf{\omega} = 0.
$$

## Linear Algebra

### 常用矩阵公式

三阶：

$$
\det(A-B) = \det(A) - \det(B) + \operatorname{adj}(B):A - \operatorname{adj}(A):B.
$$

二阶：

$$
\det(A+B) = \det(A) + \det(B) + \frac{\operatorname{adj}(B):A + \operatorname{adj}(A):B}{2}.
$$

### 向量叉乘公式推导

$$
\mathbf{a}\times\mathbf{b}
=
\mathbf{a}\,\mathbf{\Gamma}(\mathbf{b})
+
\mathbf{b}\,\mathbf{\Gamma}(\mathbf{a}).
$$

$$
\mathbf{a}\times\mathbf{b}
=
\mathbf{b}\,\mathbf{\Gamma}(\mathbf{a})
=
-\mathbf{b}\times\mathbf{a}
=
-\mathbf{a}\,\mathbf{\Gamma}(\mathbf{b}).
$$

$$
\frac{\partial(\mathbf{a}\cdot\mathbf{b})}{\partial\mathbf{c}}
=
\mathbf{a}\frac{\partial \mathbf{b}^t}{\partial\mathbf{c}}
+
\mathbf{b}\frac{\partial \mathbf{a}^t}{\partial\mathbf{c}}.
$$

能量可以写为：

$$
\mathbf{n}_1 \cdot \mathbf{n}_1.
$$

有：

$$
\frac{\partial(\mathbf{n}_1\cdot\mathbf{n}_1)}{\partial\mathbf{e}_1}
=
2\mathbf{n}_1
\frac{\partial \mathbf{n}_1^t}{\partial\mathbf{e}_1}
=
2\mathbf{n}_1
\frac{\partial(\mathbf{e}_1\times\mathbf{e}_2)^t}{\partial\mathbf{e}_1}.
$$

因此只需要推导：

$$
\frac{\partial(\mathbf{e}_1\times\mathbf{e}_2)^t}{\partial\mathbf{e}_1}.
$$

一些有用的求导公式：

$$
\mathbf{c}\cdot
\frac{\partial(\mathbf{p}\otimes\mathbf{q})}{\partial\mathbf{b}^t}
=
\mathbf{p}\otimes\mathbf{c}\,
\frac{\partial\mathbf{q}}{\partial\mathbf{b}^t}
+
\left(
\mathbf{q}\otimes\mathbf{c}\,
\frac{\partial\mathbf{p}}{\partial\mathbf{b}^t}
\right)^t
=
\mathbf{p}\otimes\mathbf{c}\,
\frac{\partial\mathbf{q}}{\partial\mathbf{b}^t}
+
\frac{\partial\mathbf{p}^t}{\partial\mathbf{b}}\,
\mathbf{c}\otimes\mathbf{q}.
$$

$$
\frac{\partial(\mathbf{a}\cdot\mathbf{b})}{\partial\mathbf{c}}
=
\mathbf{a}\frac{\partial \mathbf{b}^t}{\partial\mathbf{c}}
+
\mathbf{b}\frac{\partial \mathbf{a}^t}{\partial\mathbf{c}}.
$$

$$
\frac{\partial(\mathbf{a}\times\mathbf{b})}{\partial\mathbf{c}^t}
=
\frac{\partial\left[\mathbf{b}\mathbf{\Gamma}(\mathbf{a})\right]}{\partial\mathbf{c}^t}
=
\frac{\partial\mathbf{b}}{\partial\mathbf{c}^t}\mathbf{\Gamma}(\mathbf{a})
+
\mathbf{\Gamma}\!\left(
(\mathbf{b}\cdot\nabla_{\mathbf{c}})\mathbf{a}
\right).
$$

$$
\frac{\partial|\mathbf{x}|}{\partial\mathbf{x}}
=
\frac{\mathbf{x}}{|\mathbf{x}|}.
$$

### 莱布尼茨公式为什么和二项式定理相似
偶然发现了一个有趣的类比。

在高等数学中，Leibniz 公式非常常见，但在工科数学分析课程中往往不强调其证明。这里给出一个不严格但直观的理解。

---

**Leibniz 公式**

$$
(\mu v)^{(n)} = \sum_{k=0}^{n} C_n^k \, \mu^{(k)} \, v^{(n-k)}
$$

其中：

$$
\mu^{(0)} = \mu, \quad v^{(0)} = v
$$

---

Leibniz 公式在形式上与**二项式定理**非常相似，那么它们之间是否存在某种联系？

一个有趣的想法是，引入一种“算子”：

$$
\square + \Delta
$$

---

**算子的定义与性质**

我们希望这个算子满足如下性质：

- $\square$ 只作用在 $\mu$ 上，不作用在 $v$
- $\Delta$ 只作用在 $v$ 上，不作用在 $\mu$
- 两者的作用都是“求导”

因此：

$$
\square^n \mu = \mu^{(n)}, \quad \Delta^n v = v^{(n)}
$$

---

**一阶导数**

对乘积 $\mu v$ 求导，可以写为：

$$
(\square + \Delta)\, \mu v
= \mu' v + \mu v'
$$

---

**二阶导数**

对一阶结果再次作用算子：

$$
(\square + \Delta)^2 \mu v
$$

可以验证该表达是正确的（可用归纳法）。

---

**一般情形（n 阶导）**

$$
(\mu v)^{(n)}
= (\square + \Delta)^n \mu v
= \sum_{k=0}^{n} C_n^k \, \square^k \Delta^{n-k} (\mu v)
$$

由于：

$$
\square^k \mu = \mu^{(k)}, \quad \Delta^{n-k} v = v^{(n-k)}
$$

于是得到：

$$
(\mu v)^{(n)}
= \sum_{k=0}^{n} C_n^k \, \mu^{(k)} v^{(n-k)}
$$

这正是 Leibniz 公式。

---

**进一步思考**

如果不是两个函数相乘，而是多个函数相乘，可以引入更多类似 $\square$ 的算子。

这种推广本质上对应于：

> **多项式展开 → 广义二项式定理**

---

**一个直观理解**

导数的线性性质，在这里体现为：

$$
\text{“导数”} \leftrightarrow \text{“分配律”}
$$

---

其实，这个问题从高中就开始困扰我，直到大学才逐渐理解这一点。

### 浅谈分部积分公式
分部积分并非高数中表现的那么简单单纯，这个东西在变分过程中会经常用到。
之前发现过一些关于分部积分有趣的性质，记录如下：

**分部积分公式的几何意义**
$\int ydx=xy-\int x dy$
即为：   
$xy=\int ydx+\int x dy$
![1](浅谈分部积分公式/分部积分.png)
分部积分中的两部分在力学中表现为应变能与应变余能。

**高阶公式以及在变分法中的应用**
$\int gf'dx+\int fg'dx=gf$
$\int gf''dx-\int fg''dx=gf'-fg'$
$\int gf'''dx+\int fg'''dx=f''g-f'g'+fg''$
一般地可表示为:  
$\int gf^{\alpha}dx+(-1)^{\alpha+1}\int fg^{\alpha}dx=\Sigma_{i=0}^{\alpha-1}(-1)^{i}f^{\alpha-1-i}g^{i}$   
Euler's Elastica Rod控制方程求解中，泛函可以写成如下形式：   
$\frac{1}{2}\int |\mathbf{r}''|^2+\Lambda*(|\mathbf{r}'|^2-1)ds$   
$\mathbf{r} \rightarrow \mathbf{r}+\mathbf{\epsilon W}$   
求变分后得到   
$\int \Lambda \mathbf{r}'\mathbf{W}'+\mathbf{r}''\mathbf{W}''ds=0$   
此时上面的公式就派上用场了，直接带入得到：   
$(\Lambda \mathbf{r}'\mathbf{W}+\mathbf{r}''\mathbf{W}'-\mathbf{r}'''\mathbf{W})|_{s_1}^{s_2}+\int(\mathbf{r}''''-(\Lambda\mathbf{r}')')ds=0$

**上面那个一般性公式有没有更好看更对称的写法?**

**如何从给定泛函中直接看出变分后的结果?**   

分部积分公式的正负交错导致了含有高阶项拉格朗日方程的正负交错结果！
(我也能从单变量泛函中直接看出来变分后的结果了！)

**含高阶导数的Lagrange方程的一般形式：**    
利用上面的一般性分部积分公式，可以得到含高阶导数的Lagrange方程的一般形式：     
$\int{\Sigma _{p=0}^{n}\left( -1 \right) ^p\frac{d^p}{dx^p}\left( \frac{\partial L}{\partial y_p} \right) \epsilon dx}+\Sigma _{p=0}^{n}\Sigma _{i=0}^{p-1}\left( -1 \right) ^i\epsilon _{p-1-i}\frac{d^i}{dx^i}\left( \frac{\partial L}{\partial y_p} \right)=0$   
得到高阶Lagrange方程为：   
$\Sigma _{p=0}^{n}\left( -1 \right) ^p\frac{d^p}{dx^p}\left( \frac{\partial L}{\partial y_p} \right)=0$   
若满足诺特定理，守恒量为：   
$\Sigma _{p=0}^{n}\Sigma _{i=0}^{p-1}\left( -1 \right) ^i\epsilon _{p-1-i}\frac{d^i}{dx^i}\left( \frac{\partial L}{\partial y_p} \right)$