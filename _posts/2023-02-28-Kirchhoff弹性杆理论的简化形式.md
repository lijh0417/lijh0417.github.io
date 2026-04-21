---
title: Kirchhoff弹性杆理论的简化形式
date: 2023-02-28 09:27:18
tags:
  - Geometric Elasticity
  - Rod
---

Kirchhoff弹性杆如何退化到一些经典理论？

<!--more-->

**均假设为恒定圆截面弹性杆**

## 静态弹性杆

$$
\begin{array}{c}
\frac{\partial \mathbf{F}}{\partial s}+\mathbf{q}=0 \\[6pt]
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \mathbf{r}}{\partial s} \times \mathbf{F}+\mathbf{m}=0 \\[6pt]
\dot{\mathbf{r}}=0 \\[6pt]
\mathbf{d}_{1}=\frac{\partial u}{\partial s} \\[6pt]
\mathbf{\Gamma}=\mathbf{R}_{s} \mathbf{R}^{\mathbf{T}} \\[6pt]
\mathbf{\Omega}=0 \\[6pt]
\mathbf{M}=\mathrm{EI}(\mathbf{\Gamma})
\end{array}
$$

上式化简为：

$$
\mathrm{F}_s+\left( \mathrm{FR}_{\mathrm{s}}+\mathrm{q} \right) \mathrm{R}^{\mathrm{T}}=0
$$

$$
\mathrm{M}_s+\left( \mathrm{MR}_{\mathrm{s}}+\mathrm{m} \right) \mathrm{R}^{\mathrm{T}}+\mathrm{F}\Lambda =0
$$

$$
\Lambda =\begin{pmatrix}
0 & 0 & 0\\
0 & 0 & -1\\
0 & 1 & 0
\end{pmatrix}
$$

$$
\Gamma =\begin{pmatrix}
0 & \omega_3 & -\omega_2\\
-\omega_3 & 0 & \omega_1\\
\omega_2 & -\omega_1 & 0
\end{pmatrix} =\mathrm{R}_s \mathrm{R}^{\mathrm{T}}
$$

$$
\mathrm{M}=\begin{pmatrix}
\mathrm{GI}\omega_1 & -\mathrm{EI}\omega_2 & \mathrm{EI}\omega_3
\end{pmatrix}
$$

分两种情况讨论：

### ① 转动采用欧拉角形式表示（3-2-3转动）

转动矩阵为：

$$
\mathrm{R}=\begin{pmatrix}
c_{\alpha}c_{\beta}c_{\gamma}-s_{\alpha}s_{\gamma} & -c_{\alpha}c_{\beta}s_{\gamma}-c_{\gamma}s_{\alpha} & c_{\alpha}s_{\beta}\\
c_{\beta}c_{\gamma}s_{\alpha}+c_{\alpha}s_{\gamma} & c_{\alpha}c_{\gamma}-c_{\beta}s_{\alpha}s_{\gamma} & s_{\alpha}s_{\beta}\\
-c_{\gamma}s_{\beta} & s_{\beta}s_{\gamma} & c_{\beta}
\end{pmatrix}
$$

Frenet矩阵为：

$$
\Gamma =\begin{pmatrix}
0 & -\alpha'(s)-\cos(\beta(s))\gamma'(s) & \cos(\alpha(s))\beta'(s)+\sin(\alpha(s))\sin(\beta(s))\gamma'(s)\\
\alpha'(s)+\cos(\beta(s))\gamma'(s) & 0 & \sin(\alpha(s))\beta'(s)-\cos(\alpha(s))\sin(\beta(s))\gamma'(s)\\
-\cos(\alpha(s))\beta'(s)-\sin(\alpha(s))\sin(\beta(s))\gamma'(s) & \cos(\alpha(s))\sin(\beta(s))\gamma'(s)-\sin(\alpha(s))\beta'(s) & 0
\end{pmatrix}
$$

(2) (3) (4)结合表达为分量形式可以得到：

$$
\begin{pmatrix}
\mathrm{F}_1(s)\\
\mathrm{F}_2(s)\\
\mathrm{F}_3(s)
\end{pmatrix}'-
\begin{pmatrix}
0 & \omega_3(s) & -\omega_2(s)\\
-\omega_3(s) & 0 & \omega_1(s)\\
\omega_2(s) & -\omega_1(s) & 0
\end{pmatrix}
\begin{pmatrix}
\mathrm{F}_1(s)\\
\mathrm{F}_2(s)\\
\mathrm{F}_3(s)
\end{pmatrix}
+
\begin{pmatrix}
\cos(\alpha(s))\cos(\beta(s))\cos(\gamma(s))-\sin(\alpha(s))\sin(\gamma(s)) &
-\sin(\alpha(s))\cos(\gamma(s))-\cos(\alpha(s))\cos(\beta(s))\sin(\gamma(s)) &
\cos(\alpha(s))\sin(\beta(s))\\
\sin(\alpha(s))\cos(\beta(s))\cos(\gamma(s))+\cos(\alpha(s))\sin(\gamma(s)) &
\cos(\alpha(s))\cos(\gamma(s))-\sin(\alpha(s))\cos(\beta(s))\sin(\gamma(s)) &
\sin(\alpha(s))\sin(\beta(s))\\
-\sin(\beta(s))\cos(\gamma(s)) &
\sin(\beta(s))\sin(\gamma(s)) &
\cos(\beta(s))
\end{pmatrix}
\begin{pmatrix}
\mathrm{q}_x(s)\\
\mathrm{q}_y(s)\\
\mathrm{q}_z(s)
\end{pmatrix} =0
$$

$$
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}'-
\begin{pmatrix}
0 & \omega_3(s) & -\omega_2(s)\\
-\omega_3(s) & 0 & \omega_1(s)\\
\omega_2(s) & -\omega_1(s) & 0
\end{pmatrix}
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}
+
\begin{pmatrix}
\cos(\alpha(s))\cos(\beta(s))\cos(\gamma(s))-\sin(\alpha(s))\sin(\gamma(s)) &
-\sin(\alpha(s))\cos(\gamma(s))-\cos(\alpha(s))\cos(\beta(s))\sin(\gamma(s)) &
\cos(\alpha(s))\sin(\beta(s))\\
\sin(\alpha(s))\cos(\beta(s))\cos(\gamma(s))+\cos(\alpha(s))\sin(\gamma(s)) &
\cos(\alpha(s))\cos(\gamma(s))-\sin(\alpha(s))\cos(\beta(s))\sin(\gamma(s)) &
\sin(\alpha(s))\sin(\beta(s))\\
-\sin(\beta(s))\cos(\gamma(s)) &
\sin(\beta(s))\sin(\gamma(s)) &
\cos(\beta(s))
\end{pmatrix}
\begin{pmatrix}
\mathrm{m}_x(s)\\
\mathrm{m}_y(s)\\
\mathrm{m}_z(s)
\end{pmatrix}
+
\begin{pmatrix}
0\\
\mathrm{F}_3(s)\\
-\mathrm{F}_2(s)
\end{pmatrix} =0
$$

$$
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}
=
\begin{pmatrix}
\mathrm{GI} & 0 & 0\\
0 & -\mathrm{EI} & 0\\
0 & 0 & \mathrm{EI}
\end{pmatrix}
\begin{pmatrix}
\omega_1(s)\\
\omega_2(s)\\
\omega_3(s)
\end{pmatrix}
$$

$$
\begin{pmatrix}
\omega_1(s)\\
\omega_2(s)\\
\omega_3(s)
\end{pmatrix}
=
\begin{pmatrix}
\sin(\alpha(s))\beta'(s)-\cos(\alpha(s))\sin(\beta(s))\gamma'(s)\\
-\cos(\alpha(s))\beta'(s)-\sin(\alpha(s))\sin(\beta(s))\gamma'(s)\\
-\alpha'(s)-\cos(\beta(s))\gamma'(s)
\end{pmatrix}
$$

共有12组方程，12个变量($\omega_i; \mathrm{M}_i; \mathrm{F}_i; \alpha; \beta; \gamma$)。上述方程组是封闭的。

### ② 转动采用四元数形式表示

转动矩阵为：

$$
\mathrm{R}=\begin{pmatrix}
-2q_2(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_3(s)+q_1(s)q_2(s)) & 2q_1(s)q_3(s)-2q_0(s)q_2(s)\\
2q_1(s)q_2(s)-2q_0(s)q_3(s) & -2q_1(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_1(s)+q_2(s)q_3(s))\\
2(q_0(s)q_2(s)+q_1(s)q_3(s)) & 2q_2(s)q_3(s)-2q_0(s)q_1(s) & -2q_1(s)^2-2q_2(s)^2+1
\end{pmatrix}
$$

Frenet矩阵为：

$$
\Gamma=\begin{pmatrix}
0 & 2\left( -q_3(s)q_0'(s)+q_0(s)q_3'(s)+q_2(s)q_1'(s)-q_1(s)q_2'(s) \right) & 2\left( q_2(s)q_0'(s)-q_0(s)q_2'(s)+q_3(s)q_1'(s)-q_1(s)q_3'(s) \right)\\
2\left( q_3(s)q_0'(s)-q_0(s)q_3'(s)-q_2(s)q_1'(s)+q_1(s)q_2'(s) \right) & 0 & 2\left( -q_1(s)q_0'(s)+q_0(s)q_1'(s)+q_3(s)q_2'(s)-q_2(s)q_3'(s) \right)\\
2\left( -q_2(s)q_0'(s)+q_0(s)q_2'(s)-q_3(s)q_1'(s)+q_1(s)q_3'(s) \right) & 2\left( q_1(s)q_0'(s)-q_0(s)q_1'(s)-q_3(s)q_2'(s)+q_2(s)q_3'(s) \right) & 0
\end{pmatrix}
$$

加上约束：

$$
q_0(s)^2+q_1(s)^2+q_2(s)^2+q_3(s)^2=1
$$

(2) (6) (7) (8)结合表达为分量形式可以得到：

$$
\begin{pmatrix}
\mathrm{F}_1(s)\\
\mathrm{F}_2(s)\\
\mathrm{F}_3(s)
\end{pmatrix}'-
\begin{pmatrix}
0 & \omega_3(s) & -\omega_2(s)\\
-\omega_3(s) & 0 & \omega_1(s)\\
\omega_2(s) & -\omega_1(s) & 0
\end{pmatrix}
\begin{pmatrix}
\mathrm{F}_1(s)\\
\mathrm{F}_2(s)\\
\mathrm{F}_3(s)
\end{pmatrix}
+
\begin{pmatrix}
-2q_2(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_3(s)+q_1(s)q_2(s)) & 2q_1(s)q_3(s)-2q_0(s)q_2(s)\\
2q_1(s)q_2(s)-2q_0(s)q_3(s) & -2q_1(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_1(s)+q_2(s)q_3(s))\\
2(q_0(s)q_2(s)+q_1(s)q_3(s)) & 2q_2(s)q_3(s)-2q_0(s)q_1(s) & -2q_1(s)^2-2q_2(s)^2+1
\end{pmatrix}
\begin{pmatrix}
q_x(s)\\
q_y(s)\\
q_z(s)
\end{pmatrix} =0
$$

$$
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}'-
\begin{pmatrix}
0 & \omega_3(s) & -\omega_2(s)\\
-\omega_3(s) & 0 & \omega_1(s)\\
\omega_2(s) & -\omega_1(s) & 0
\end{pmatrix}
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}
+
\begin{pmatrix}
-2q_2(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_3(s)+q_1(s)q_2(s)) & 2q_1(s)q_3(s)-2q_0(s)q_2(s)\\
2q_1(s)q_2(s)-2q_0(s)q_3(s) & -2q_1(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_1(s)+q_2(s)q_3(s))\\
2(q_0(s)q_2(s)+q_1(s)q_3(s)) & 2q_2(s)q_3(s)-2q_0(s)q_1(s) & -2q_1(s)^2-2q_2(s)^2+1
\end{pmatrix}
\begin{pmatrix}
\mathrm{m}_x(s)\\
\mathrm{m}_y(s)\\
\mathrm{m}_z(s)
\end{pmatrix}
+
\begin{pmatrix}
0\\
\mathrm{F}_3(s)\\
-\mathrm{F}_2(s)
\end{pmatrix} =0
$$

$$
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}
=
\begin{pmatrix}
\mathrm{GI} & 0 & 0\\
0 & -\mathrm{EI} & 0\\
0 & 0 & \mathrm{EI}
\end{pmatrix}
\begin{pmatrix}
\omega_1(s)\\
\omega_2(s)\\
\omega_3(s)
\end{pmatrix}
$$

$$
\begin{pmatrix}
\omega_1(s)\\
\omega_2(s)\\
\omega_3(s)
\end{pmatrix}
=
\begin{pmatrix}
2\left( -q_1(s)q_0'(s)+q_0(s)q_1'(s)+q_3(s)q_2'(s)-q_2(s)q_3'(s) \right)\\
2\left( -q_2(s)q_0'(s)+q_0(s)q_2'(s)-q_3(s)q_1'(s)+q_1(s)q_3'(s) \right)\\
2\left( -q_3(s)q_0'(s)+q_0(s)q_3'(s)+q_2(s)q_1'(s)-q_1(s)q_2'(s) \right)
\end{pmatrix}
$$

转动表达形式选取影响的只是(5)式，在存在载荷时会体现出与欧拉角求解的差异，外部载荷为零时，由于是局部标架与整体标架是解耦的。

### 简化讨论

若外载荷为0，欧拉角从上述方程中解耦出来。得到：

$$
\begin{pmatrix}
\mathrm{F}_1(s)\\
\mathrm{F}_2(s)\\
\mathrm{F}_3(s)
\end{pmatrix}'-
\begin{pmatrix}
0 & \omega_3(s) & -\omega_2(s)\\
-\omega_3(s) & 0 & \omega_1(s)\\
\omega_2(s) & -\omega_1(s) & 0
\end{pmatrix}
\begin{pmatrix}
\mathrm{F}_1(s)\\
\mathrm{F}_2(s)\\
\mathrm{F}_3(s)
\end{pmatrix} =0
$$

$$
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}'-
\begin{pmatrix}
0 & \omega_3(s) & -\omega_2(s)\\
-\omega_3(s) & 0 & \omega_1(s)\\
\omega_2(s) & -\omega_1(s) & 0
\end{pmatrix}
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}
+
\begin{pmatrix}
0\\
\mathrm{F}_3(s)\\
-\mathrm{F}_2(s)
\end{pmatrix} =0
$$

$$
\begin{pmatrix}
\mathrm{M}_1(s)\\
\mathrm{M}_2(s)\\
\mathrm{M}_3(s)
\end{pmatrix}
=
\begin{pmatrix}
\mathrm{GI} & 0 & 0\\
0 & -\mathrm{EI} & 0\\
0 & 0 & \mathrm{EI}
\end{pmatrix}
\begin{pmatrix}
\omega_1(s)\\
\omega_2(s)\\
\omega_3(s)
\end{pmatrix}
$$

$$
\begin{pmatrix}
\omega_1(s)\\
\omega_2(s)\\
\omega_3(s)
\end{pmatrix}
=
\begin{pmatrix}
\sin(\alpha(s))\beta'(s)-\cos(\alpha(s))\sin(\beta(s))\gamma'(s)\\
-\cos(\alpha(s))\beta'(s)-\sin(\alpha(s))\sin(\beta(s))\gamma'(s)\\
-\alpha'(s)-\cos(\beta(s))\gamma'(s)
\end{pmatrix}
=
\begin{pmatrix}
2\left( -q_1(s)q_0'(s)+q_0(s)q_1'(s)+q_3(s)q_2'(s)-q_2(s)q_3'(s) \right)\\
2\left( -q_2(s)q_0'(s)+q_0(s)q_2'(s)-q_3(s)q_1'(s)+q_1(s)q_3'(s) \right)\\
2\left( -q_3(s)q_0'(s)+q_0(s)q_3'(s)+q_2(s)q_1'(s)-q_1(s)q_2'(s) \right)
\end{pmatrix}
$$

化简为：

$$
\begin{cases}
\mathrm{EI}\left( \left( \omega_1\left( \omega_3^2-\omega_2^2 \right) \right)'+\omega_3(s)\omega_2''(s)-2\omega_1(s)^2\omega_2(s)\omega_3(s)+\omega_2(s)\omega_3''(s) \right) -\mathrm{GI}\left( \left( \omega_2(s)^2+\omega_3(s)^2 \right) \omega_1'(s)+\frac{\omega_1(s)}{2}\left( \omega_2(s)^2+\omega_3(s)^2 \right)' \right) =0\\
\mathrm{EI}\left( \frac{3\omega_1'(s)\omega_3'(s)}{\omega_2(s)}+\omega_3(s)\left( \frac{\omega_1'(s)}{\omega_2(s)} \right)'+2\omega_1(s)\left( \frac{\omega_3'(s)}{\omega_2(s)} \right)'-\left( \omega_1(s)^2+\frac{1}{2}\left( \omega_3(s)^2-\omega_2(s)^2 \right) \right)'+2\omega_1(s)\omega_2(s)\omega_3(s)+\left( \frac{\omega_2''(s)}{\omega_2(s)} \right)' \right) +\mathrm{GI}\left( -\omega_3(s)\left( \frac{\omega_1'(s)}{\omega_2(s)} \right)'-\omega_3'(s)\left( \frac{\omega_1(s)}{\omega_2(s)} \right)'-\frac{\left( \omega_1(s)\omega_3'(s) \right)'}{\omega_2(s)}-\left( \omega_1(s)^2 \right)' \right) =0\\
\mathrm{EI}\left( \frac{3\omega_1'(s)\omega_2'(s)}{\omega_3(s)}-\omega_2(s)\left( \frac{\omega_1'(s)}{\omega_3(s)} \right)'+2\omega_1(s)\left( \frac{\omega_2'(s)}{\omega_3(s)} \right)'+\left( \omega_1(s)^2+\frac{1}{2}\left( \omega_2(s)^2-\omega_3(s)^2 \right) \right)'+2\omega_1(s)\omega_2(s)\omega_3(s)-\left( \frac{\omega_3''(s)}{\omega_3(s)} \right)' \right) +\mathrm{GI}\left( \omega_1(s)\left( \frac{\omega_2'(s)}{\omega_3(s)} \right)'+\omega_1'(s)\left( \frac{\omega_2(s)}{\omega_3(s)} \right)'+\frac{\left( \omega_2(s)\omega_1'(s) \right)'}{\omega_3(s)}-\left( \omega_1(s)^2 \right)' \right) =0\\
\end{cases}
$$

即使对于无外载荷的Kirchhoff弹性杆，求得的控制方程已经足够复杂。现在考虑选取Frenet坐标系，即令 $\omega_3=\kappa;\omega_2=0;\omega_1=\tau$，上式化简为：

$$
\begin{cases}
\frac{\tau'}{\tau}+\frac{\left( 2\mathrm{EI}-\mathrm{GI} \right)}{2\left( \mathrm{EI}-\mathrm{GI} \right)}\frac{\left( \kappa^2 \right)'}{\kappa^2}=0\\
\left( \frac{\kappa''}{\kappa} \right)'+\left( \frac{\mathrm{GI}}{\mathrm{EI}}-1 \right) \left( \tau^2 \right)'+\frac{1}{2}\left( \kappa^2 \right)'=0\\
\end{cases}
$$

定义 $\frac{\mathrm{EI}}{\mathrm{GI}}=\nu+1$，$\nu$为泊松比。得到控制方程：

$$
\begin{cases}
\frac{\tau'}{\tau}+\left( 1+\frac{1}{2\nu} \right) \frac{\left( \kappa^2 \right)'}{\kappa^2}=0\\
\left( \frac{\kappa''}{\kappa} \right)'-\frac{\nu}{\nu+1}\left( \tau^2 \right)'+\frac{1}{2}\left( \kappa^2 \right)'=0\\
\end{cases}
$$

通过(9)积分得到：

$$
\begin{cases}
\tau \kappa^{2+\frac{1}{\nu}}=\mathrm{c}_0\\
\kappa''-\frac{\nu}{\nu+1}\tau^2\kappa +\frac{1}{2}\kappa^3+\mathrm{c}_1=0\\
\end{cases}
$$

求出含扭转无载静态弹性杆的控制方程为：

$$
\kappa''+\frac{1}{2}\kappa^3+\mathrm{c}_1\kappa -\frac{\nu}{\nu+1}\mathrm{c}_0^2\frac{1}{\kappa^{3+\frac{2}{\nu}}}=0
$$

可以看出，如果不考虑扭转能，令 $\mathrm{GI}\rightarrow0;\nu\rightarrow\infty$，(11)退化到[弹性线问题与数值求解](https://lijh0417.github.io/2022/11/02/%E5%BC%B9%E6%80%A7%E7%BA%BF%E9%97%AE%E9%A2%98%E4%B8%8E%E6%95%B0%E5%80%BC%E6%B1%82%E8%A7%A3/)中通过能量泛函求出的Euler's Elastica Rod方程。

## 稳态弹性杆（沿绳子运动）

局部标架二阶导表达式为：

$$
\ddot{\mathbf{d}}=\left( v_t\Gamma +v^2\left( \Gamma_s+\Gamma\Gamma \right) \right) \mathbf{d}
$$

$$
\ddot{r}=r_{ss}v^2+r_sv_t=v_t\mathbf{d}_1+v^2\left( m_1\mathbf{d}_2+m_2\mathbf{d}_3 \right)
$$

弹性杆方程：

$$
\frac{\partial \mathbf{F}}{\partial s}+\mathbf{q}=\rho \mathbf{A}\ddot{\mathbf{r}}=\rho \mathbf{A}(v_t\mathbf{d}_1+v^2(m_1\mathbf{d}_2+m_2\mathbf{d}_3))
$$

$$
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \mathbf{r}}{\partial s}\times \mathbf{F}+\mathbf{m}=\rho \left( \mathrm{I}_3\mathbf{d}_2\times \ddot{\mathbf{d}}_2+\mathrm{I}_2\mathbf{d}_3\times \ddot{\mathbf{d}}_3 \right)
$$

$$
=\rho I_0\left( \left( 2v^2m'+2mv_t \right) \mathbf{d}_1+\left( -m_2v_t-v^2m_2'+v^2mm_1 \right) \mathbf{d}_2+\left( m_1v_t+v^2m_1'+v^2mm_2 \right) \mathbf{d}_3 \right)
$$

$$
\dot{\mathbf{r}}=\frac{\partial u}{\partial t}=\frac{\partial u}{\partial s}v=v\mathbf{d}_1
$$

$$
\mathbf{d}_1=\frac{\partial u}{\partial s}
$$

$$
\mathbf{\Gamma}=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}
$$

$$
\mathbf{\Omega}=v\mathbf{R}_s\mathbf{R}^{\mathbf{T}}=v\mathbf{\Gamma}
$$

$$
\mathbf{M}=\mathrm{EI}(\mathbf{\Gamma})
$$

## 二维理论

### 二维静态理论

从静态理论的代码开始简化：

$$
\frac{\partial \mathbf{F}}{\partial s}+\mathbf{q}=0
$$

$$
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \mathbf{r}}{\partial s}\times \mathbf{F}+\mathbf{m}=0
$$

$$
\dot{\mathbf{r}}=0
$$

$$
\mathbf{d}_1=\frac{\partial u}{\partial s}
$$

$$
\mathbf{\Gamma}=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}
$$

$$
\mathbf{\Omega}=0
$$

$$
\mathbf{M}=\mathrm{EI}(\mathbf{\Gamma})
$$

简化条件：

$$
\mathbf{F}=\mathrm{F}_1\mathbf{d}_1+\mathrm{F}_2\mathbf{d}_2
$$

$$
\mathbf{M}=\mathrm{M}\mathbf{d}_3
$$

$$
\tau =0
$$

$$
\dot{\mathbf{d}}_3=0
$$

$$
\dot{\mathbf{d}}_1=\kappa \mathbf{d}_2
$$

$$
\dot{\mathbf{d}}_2=-\kappa \mathbf{d}_1
$$

$$
\mathrm{M}=\mathrm{EI}\kappa
$$

$$
\begin{pmatrix}
\mathbf{d}_1\\
\mathbf{d}_2
\end{pmatrix}
=
\begin{pmatrix}
\cos\theta(s) & -\sin\theta(s)\\
\sin\theta(s) & \cos\theta(s)
\end{pmatrix}
\begin{pmatrix}
\mathbf{x}\\
\mathbf{y}
\end{pmatrix}
$$

$$
\begin{pmatrix}
0 & \kappa\\
-\kappa & 0
\end{pmatrix}
=
\begin{pmatrix}
0 & -\theta'(s)\\
\theta'(s) & 0
\end{pmatrix}
$$

$$
\mathbf{m}=m(s)\mathbf{d}_3
$$

$$
\mathbf{q}=q_x(s)\mathbf{i}+q_y(s)\mathbf{j}
=
\begin{pmatrix}
q_x(s) & q_y(s)
\end{pmatrix}
\begin{pmatrix}
\mathbf{i}\\
\mathbf{j}
\end{pmatrix}
=
\begin{pmatrix}
q_x(s) & q_y(s)
\end{pmatrix}
\begin{pmatrix}
\cos\theta(s) & \sin\theta(s)\\
-\sin\theta(s) & \cos\theta(s)
\end{pmatrix}
\begin{pmatrix}
\mathbf{d}_1\\
\mathbf{d}_2
\end{pmatrix}
$$

矢量方程化简为：

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)+\cos\theta(s) q_x(s) -\sin\theta(s) q_y(s) =0\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)+\cos\theta(s) q_y(s) +\sin\theta(s) q_x(s) =0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)
\end{cases}
$$

在这里分两种情况进行讨论：

**① 小角度情况：** $\theta(s)\approx0$，此时标架与固定坐标系重合，(6)式化简为：

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)+q_x(s) =0\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)+q_y(s) =0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)\\
\mathrm{M}(s) =\mathrm{EI}\kappa(s)
\end{cases}
$$

对于不可拉伸梁结构，轴力为常数。对于悬臂梁右端轴力为零，因此 $\mathrm{F}_1 =0$。

$$
\begin{cases}
\mathrm{F}_2(s)\kappa(s)+q_x(s) =0\\
\mathrm{F}_2'(s)+q_y(s) =0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)\\
\mathrm{M}(s) =\mathrm{EI}\kappa(s)
\end{cases}
$$

由(8)式得到：$q_y(s) =\mathrm{EI}\kappa''(s) +m'(s)$。

对于恒定弯矩载荷作用梁，上式退化为经典的欧拉梁公式：

$$
q_y(s) =(\mathrm{EI}\kappa(s))''=\frac{\partial^2}{\partial s^2}(\mathrm{EI}\frac{\partial^2u(s)}{\partial s^2})
$$

**② 外力载荷为0的情况：** 此时 $q_x(s)=0, q_y(s)=0$。

(6)式化简为：

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)=0\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)=0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)\\
\mathrm{M}(s) =\mathrm{EI}\kappa(s)
\end{cases}
$$

(10)式化简为：

$$
\begin{cases}
\mathrm{m}(s) \kappa(s) +\left( \frac{\mathrm{m}'(s)}{\kappa(s)} \right)'+\mathrm{EI}\left( \frac{\kappa(s)^2}{2}+\frac{\kappa''(s)}{\kappa(s)} \right)'=0\\
\mathrm{F}_2(s) \kappa(s) +\left( \frac{\mathrm{F}_2'(s)}{\kappa(s)} \right)'=0\\
\mathrm{m}(s) +\mathrm{EI}\kappa'(s) +\mathrm{F}_2(s) =0
\end{cases}
$$

如果外力矩载荷为零，$\mathrm{m}(s)=0$。得到：$\frac{\kappa(s)^2}{2}+\frac{\kappa''(s)}{\kappa(s)}=c$，展开后即为Euler Elastica方程（[弹性线问题与数值求解](https://lijh0417.github.io/2022/11/02/%E5%BC%B9%E6%80%A7%E7%BA%BF%E9%97%AE%E9%A2%98%E4%B8%8E%E6%95%B0%E5%80%BC%E6%B1%82%E8%A7%A3/)中通过能量方法已经得到）：

$$
\kappa''(s) +\frac{\kappa(s)^3}{2}+\mathrm{c}\kappa(s) =0
$$

### 二维稳态理论

二维稳态理论可简化为：

$$
\frac{\partial \mathbf{F}}{\partial s}+\mathbf{q}=\rho\mathrm{A}\left( v_t\mathbf{d}_1+v^2\kappa(s) \mathbf{d}_2 \right)
$$

$$
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \mathbf{r}}{\partial s}\times \mathbf{F}+\mathbf{m}=\rho\mathrm{I}_0\left( \kappa(s) v_t+v^2\kappa'(s) \right) \mathbf{d}_3
$$

$$
\dot{\mathbf{r}}=v\mathbf{d}_1
$$

$$
\mathbf{d}_1=\frac{\partial u}{\partial s}
$$

$$
\mathbf{\Gamma}=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}
$$

$$
\mathbf{\Omega}=v\mathbf{R}_s\mathbf{R}^{\mathbf{T}}
$$

$$
\mathbf{M}=\mathrm{EI}(\mathbf{\Gamma})
$$

简化条件：

$$
\mathbf{F}=\mathrm{F}_1\mathbf{d}_1+\mathrm{F}_2\mathbf{d}_2
$$

$$
\mathbf{M}=\mathrm{M}\mathbf{d}_3
$$

$$
\tau =0
$$

$$
\mathbf{d}'_3=0
$$

$$
\mathbf{d}'_1=\kappa \mathbf{d}_2
$$

$$
\mathbf{d}'_2=-\kappa \mathbf{d}_1
$$

$$
\mathrm{M}=\mathrm{EI}\kappa
$$

$$
\begin{pmatrix}
\mathbf{d}_1\\
\mathbf{d}_2
\end{pmatrix}
=
\begin{pmatrix}
\cos\theta(s) & -\sin\theta(s)\\
\sin\theta(s) & \cos\theta(s)
\end{pmatrix}
\begin{pmatrix}
\mathbf{x}\\
\mathbf{y}
\end{pmatrix}
$$

$$
\begin{pmatrix}
0 & \kappa\\
-\kappa & 0
\end{pmatrix}
=
\begin{pmatrix}
0 & -\theta'(s)\\
\theta'(s) & 0
\end{pmatrix}
$$

$$
\mathbf{m}=m(s)\mathbf{d}_3
$$

$$
\mathbf{q}=q_x(s)\mathbf{i}+q_y(s)\mathbf{j}
=
\begin{pmatrix}
q_x(s) & q_y(s)
\end{pmatrix}
\begin{pmatrix}
\mathbf{i}\\
\mathbf{j}
\end{pmatrix}
=
\begin{pmatrix}
q_x(s) & q_y(s)
\end{pmatrix}
\begin{pmatrix}
\cos\theta(s) & \sin\theta(s)\\
-\sin\theta(s) & \cos\theta(s)
\end{pmatrix}
\begin{pmatrix}
\mathbf{d}_1\\
\mathbf{d}_2
\end{pmatrix}
$$

矢量方程简化为：

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)+\cos\theta(s) q_x(s) -\sin\theta(s) q_y(s) =\rho\mathrm{A}v_t\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)+\cos\theta(s) q_y(s) +\sin\theta(s) q_x(s) =\rho\mathrm{A}v^2\kappa(s)\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =\rho I_0\left( \kappa(s) v_t+v^2\kappa'(s) \right)\\
\kappa(s) =-\theta'(s)
\end{cases}
$$

上式化简为：

$$
\begin{cases}
\mathrm{m}(s) \kappa(s) +\left( \frac{\mathrm{m}'(s)}{\kappa(s)} \right)'+\mathrm{EI}\left( \frac{\kappa(s)^2}{2}+\frac{\kappa''(s)}{\kappa(s)} \right)'-\sin(\theta(s))\left( \left( \frac{q_x(s)}{\kappa(s)} \right)'+2q_y(s) \right) +\cos(\theta(s))\left( 2q_x(s)\frac{q_y(s)}{\kappa(s)}-\left( \frac{q_y(s)}{\kappa(s)} \right)' \right)=v_t\left( \rho\mathrm{A}+\rho\mathrm{I}_0\kappa(s)^2+\rho\mathrm{I}_0\left( \frac{\kappa'(s)}{\kappa(s)} \right)' \right) +v^2\rho\mathrm{I}_0\left( \left( \frac{\kappa(s)^2}{2} \right)'+\left( \frac{\kappa''(s)}{\kappa(s)} \right)' \right)\\
-\sin(\theta(s))\left( \left( \frac{q_x(s)}{\kappa(s)} \right)'+2q_y(s) \right) +\cos(\theta(s))\left( 2q_x(s)-\left( \frac{q_y(s)}{\kappa(s)} \right)' \right) =\rho\mathrm{A}v_t\\
\mathrm{F}_2(s) \kappa(s) +\left( \frac{\mathrm{F}_2'(s)}{\kappa(s)} \right)'=0\\
\mathrm{m}(s) +\mathrm{EI}\kappa'(s) +\mathrm{F}_2(s) =\rho\mathrm{I}_0\left( v_t\kappa(s) +v^2\kappa'(s) \right)
\end{cases}
$$