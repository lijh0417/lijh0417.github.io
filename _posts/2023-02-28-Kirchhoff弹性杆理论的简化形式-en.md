---
title: "Simplified Forms of Kirchhoff Rod Theory"
date: 2023-02-28 09:27:18
tags:
  - Geometric Elasticity
  - Rod
lang: en
ref: kirchhoff-rod-simplified
permalink: /2023/02/kirchhoff-rod-simplified/
---

How does the Kirchhoff rod reduce to some classical theories?

<!--more-->

**All assumed to be constant circular cross-section elastic rods**

## Static Elastic Rod

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

The above simplifies to:

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

Two cases are discussed:

### ① Rotation expressed in Euler angles (3-2-3 rotation)

The rotation matrix is:

$$
\mathrm{R}=\begin{pmatrix}
c_{\alpha}c_{\beta}c_{\gamma}-s_{\alpha}s_{\gamma} & -c_{\alpha}c_{\beta}s_{\gamma}-c_{\gamma}s_{\alpha} & c_{\alpha}s_{\beta}\\
c_{\beta}c_{\gamma}s_{\alpha}+c_{\alpha}s_{\gamma} & c_{\alpha}c_{\gamma}-c_{\beta}s_{\alpha}s_{\gamma} & s_{\alpha}s_{\beta}\\
-c_{\gamma}s_{\beta} & s_{\beta}s_{\gamma} & c_{\beta}
\end{pmatrix}
$$

The Frenet matrix is:

$$
\Gamma =\begin{pmatrix}
0 & -\alpha'(s)-\cos(\beta(s))\gamma'(s) & \cos(\alpha(s))\beta'(s)+\sin(\alpha(s))\sin(\beta(s))\gamma'(s)\\
\alpha'(s)+\cos(\beta(s))\gamma'(s) & 0 & \sin(\alpha(s))\beta'(s)-\cos(\alpha(s))\sin(\beta(s))\gamma'(s)\\
-\cos(\alpha(s))\beta'(s)-\sin(\alpha(s))\sin(\beta(s))\gamma'(s) & \cos(\alpha(s))\sin(\beta(s))\gamma'(s)-\sin(\alpha(s))\beta'(s) & 0
\end{pmatrix}
$$

Combining (2), (3), and (4) in component form:

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

There are 12 sets of equations and 12 variables ($\omega_i; \mathrm{M}_i; \mathrm{F}_i; \alpha; \beta; \gamma$). The system is closed.

### ② Rotation expressed in quaternion form

The rotation matrix is:

$$
\mathrm{R}=\begin{pmatrix}
-2q_2(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_3(s)+q_1(s)q_2(s)) & 2q_1(s)q_3(s)-2q_0(s)q_2(s)\\
2q_1(s)q_2(s)-2q_0(s)q_3(s) & -2q_1(s)^2-2q_3(s)^2+1 & 2(q_0(s)q_1(s)+q_2(s)q_3(s))\\
2(q_0(s)q_2(s)+q_1(s)q_3(s)) & 2q_2(s)q_3(s)-2q_0(s)q_1(s) & -2q_1(s)^2-2q_2(s)^2+1
\end{pmatrix}
$$

The Frenet matrix is:

$$
\Gamma=\begin{pmatrix}
0 & 2\left( -q_3(s)q_0'(s)+q_0(s)q_3'(s)+q_2(s)q_1'(s)-q_1(s)q_2'(s) \right) & 2\left( q_2(s)q_0'(s)-q_0(s)q_2'(s)+q_3(s)q_1'(s)-q_1(s)q_3'(s) \right)\\
2\left( q_3(s)q_0'(s)-q_0(s)q_3'(s)-q_2(s)q_1'(s)+q_1(s)q_2'(s) \right) & 0 & 2\left( -q_1(s)q_0'(s)+q_0(s)q_1'(s)+q_3(s)q_2'(s)-q_2(s)q_3'(s) \right)\\
2\left( -q_2(s)q_0'(s)+q_0(s)q_2'(s)-q_3(s)q_1'(s)+q_1(s)q_3'(s) \right) & 2\left( q_1(s)q_0'(s)-q_0(s)q_1'(s)-q_3(s)q_2'(s)+q_2(s)q_3'(s) \right) & 0
\end{pmatrix}
$$

Plus the constraint:

$$
q_0(s)^2+q_1(s)^2+q_2(s)^2+q_3(s)^2=1
$$

Combining (2), (6), (7), and (8) in component form:

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

The choice of rotation representation only affects equation (5). When external loads are present, it differs from the Euler angle solution; when external loads are zero, the local frame and global frame are decoupled.

### Simplified Discussion

If the external load is zero, the Euler angles decouple from the above equations, giving:

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

Simplifying:

$$
\begin{cases}
\mathrm{EI}\left( \left( \omega_1\left( \omega_3^2-\omega_2^2 \right) \right)'+\omega_3(s)\omega_2''(s)-2\omega_1(s)^2\omega_2(s)\omega_3(s)+\omega_2(s)\omega_3''(s) \right) -\mathrm{GI}\left( \left( \omega_2(s)^2+\omega_3(s)^2 \right) \omega_1'(s)+\frac{\omega_1(s)}{2}\left( \omega_2(s)^2+\omega_3(s)^2 \right)' \right) =0\\
\mathrm{EI}\left( \frac{3\omega_1'(s)\omega_3'(s)}{\omega_2(s)}+\omega_3(s)\left( \frac{\omega_1'(s)}{\omega_2(s)} \right)'+2\omega_1(s)\left( \frac{\omega_3'(s)}{\omega_2(s)} \right)'-\left( \omega_1(s)^2+\frac{1}{2}\left( \omega_3(s)^2-\omega_2(s)^2 \right) \right)'+2\omega_1(s)\omega_2(s)\omega_3(s)+\left( \frac{\omega_2''(s)}{\omega_2(s)} \right)' \right) +\mathrm{GI}\left( -\omega_3(s)\left( \frac{\omega_1'(s)}{\omega_2(s)} \right)'-\omega_3'(s)\left( \frac{\omega_1(s)}{\omega_2(s)} \right)'-\frac{\left( \omega_1(s)\omega_3'(s) \right)'}{\omega_2(s)}-\left( \omega_1(s)^2 \right)' \right) =0\\
\mathrm{EI}\left( \frac{3\omega_1'(s)\omega_2'(s)}{\omega_3(s)}-\omega_2(s)\left( \frac{\omega_1'(s)}{\omega_3(s)} \right)'+2\omega_1(s)\left( \frac{\omega_2'(s)}{\omega_3(s)} \right)'+\left( \omega_1(s)^2+\frac{1}{2}\left( \omega_2(s)^2-\omega_3(s)^2 \right) \right)'+2\omega_1(s)\omega_2(s)\omega_3(s)-\left( \frac{\omega_3''(s)}{\omega_3(s)} \right)' \right) +\mathrm{GI}\left( \omega_1(s)\left( \frac{\omega_2'(s)}{\omega_3(s)} \right)'+\omega_1'(s)\left( \frac{\omega_2(s)}{\omega_3(s)} \right)'+\frac{\left( \omega_2(s)\omega_1'(s) \right)'}{\omega_3(s)}-\left( \omega_1(s)^2 \right)' \right) =0\\
\end{cases}
$$

Even for a Kirchhoff rod without external loads, the governing equations are already quite complex. Now consider choosing the Frenet frame, i.e., let $\omega_3=\kappa;\omega_2=0;\omega_1=\tau$. The above simplifies to:

$$
\begin{cases}
\frac{\tau'}{\tau}+\frac{\left( 2\mathrm{EI}-\mathrm{GI} \right)}{2\left( \mathrm{EI}-\mathrm{GI} \right)}\frac{\left( \kappa^2 \right)'}{\kappa^2}=0\\
\left( \frac{\kappa''}{\kappa} \right)'+\left( \frac{\mathrm{GI}}{\mathrm{EI}}-1 \right) \left( \tau^2 \right)'+\frac{1}{2}\left( \kappa^2 \right)'=0\\
\end{cases}
$$

Define $\frac{\mathrm{EI}}{\mathrm{GI}}=\nu+1$, $\nu$ is Poisson's ratio. The governing equations become:

$$
\begin{cases}
\frac{\tau'}{\tau}+\left( 1+\frac{1}{2\nu} \right) \frac{\left( \kappa^2 \right)'}{\kappa^2}=0\\
\left( \frac{\kappa''}{\kappa} \right)'-\frac{\nu}{\nu+1}\left( \tau^2 \right)'+\frac{1}{2}\left( \kappa^2 \right)'=0\\
\end{cases}
$$

Integrating (9):

$$
\begin{cases}
\tau \kappa^{2+\frac{1}{\nu}}=\mathrm{c}_0\\
\kappa''-\frac{\nu}{\nu+1}\tau^2\kappa +\frac{1}{2}\kappa^3+\mathrm{c}_1=0\\
\end{cases}
$$

The governing equation for the unloaded static elastic rod with torsion is:

$$
\kappa''+\frac{1}{2}\kappa^3+\mathrm{c}_1\kappa -\frac{\nu}{\nu+1}\mathrm{c}_0^2\frac{1}{\kappa^{3+\frac{2}{\nu}}}=0
$$

If torsional energy is neglected, i.e., $\mathrm{GI}\rightarrow0;\nu\rightarrow\infty$, (11) reduces to the Euler's Elastica Rod equation obtained via the energy functional in [The Elastic Rod Problem and Its Numerical Solution](https://lijh0417.github.io/2022/11/02/%E5%BC%B9%E6%80%A7%E7%BA%BF%E9%97%AE%E9%A2%98%E4%B8%8E%E6%95%B0%E5%80%BC%E6%B1%82%E8%A7%A3/).

## Steady-State Elastic Rod (Moving Along the Rope)

The second derivative of the local frame is:

$$
\ddot{\mathbf{d}}=\left( v_t\Gamma +v^2\left( \Gamma_s+\Gamma\Gamma \right) \right) \mathbf{d}
$$

$$
\ddot{r}=r_{ss}v^2+r_sv_t=v_t\mathbf{d}_1+v^2\left( m_1\mathbf{d}_2+m_2\mathbf{d}_3 \right)
$$

The elastic rod equations:

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

## Two-Dimensional Theory

### Two-Dimensional Static Theory

Starting from the static theory equations:

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

Simplification conditions:

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

The vector equations simplify to:

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)+\cos\theta(s) q_x(s) -\sin\theta(s) q_y(s) =0\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)+\cos\theta(s) q_y(s) +\sin\theta(s) q_x(s) =0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)
\end{cases}
$$

Two cases are discussed:

**① Small angle case:** $\theta(s)\approx0$, the frame coincides with the fixed coordinate system. Equation (6) simplifies to:

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)+q_x(s) =0\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)+q_y(s) =0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)\\
\mathrm{M}(s) =\mathrm{EI}\kappa(s)
\end{cases}
$$

For an inextensible beam, the axial force is constant. For a cantilever beam with zero axial force at the right end, $\mathrm{F}_1 =0$.

$$
\begin{cases}
\mathrm{F}_2(s)\kappa(s)+q_x(s) =0\\
\mathrm{F}_2'(s)+q_y(s) =0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)\\
\mathrm{M}(s) =\mathrm{EI}\kappa(s)
\end{cases}
$$

From equation (8): $q_y(s) =\mathrm{EI}\kappa''(s) +m'(s)$.

For a beam under constant bending moment load, the above reduces to the classical Euler beam formula:

$$
q_y(s) =(\mathrm{EI}\kappa(s))''=\frac{\partial^2}{\partial s^2}(\mathrm{EI}\frac{\partial^2u(s)}{\partial s^2})
$$

**② Case with zero external load:** $q_x(s)=0, q_y(s)=0$.

Equation (6) simplifies to:

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)=0\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)=0\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =0\\
\kappa(s) =-\theta'(s)\\
\mathrm{M}(s) =\mathrm{EI}\kappa(s)
\end{cases}
$$

Equation (10) simplifies to:

$$
\begin{cases}
\mathrm{m}(s) \kappa(s) +\left( \frac{\mathrm{m}'(s)}{\kappa(s)} \right)'+\mathrm{EI}\left( \frac{\kappa(s)^2}{2}+\frac{\kappa''(s)}{\kappa(s)} \right)'=0\\
\mathrm{F}_2(s) \kappa(s) +\left( \frac{\mathrm{F}_2'(s)}{\kappa(s)} \right)'=0\\
\mathrm{m}(s) +\mathrm{EI}\kappa'(s) +\mathrm{F}_2(s) =0
\end{cases}
$$

If the external moment load is zero, $\mathrm{m}(s)=0$. We obtain: $\frac{\kappa(s)^2}{2}+\frac{\kappa''(s)}{\kappa(s)}=c$, which expands to the Euler Elastica equation (already obtained via the energy method in [The Elastic Rod Problem and Its Numerical Solution](https://lijh0417.github.io/2022/11/02/%E5%BC%B9%E6%80%A7%E7%BA%BF%E9%97%AE%E9%A2%98%E4%B8%8E%E6%95%B0%E5%80%BC%E6%B1%82%E8%A7%A3/)):

$$
\kappa''(s) +\frac{\kappa(s)^3}{2}+\mathrm{c}\kappa(s) =0
$$

### Two-Dimensional Steady-State Theory

The two-dimensional steady-state theory can be simplified to:

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

Simplification conditions:

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

The vector equations simplify to:

$$
\begin{cases}
\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa(s)+\cos\theta(s) q_x(s) -\sin\theta(s) q_y(s) =\rho\mathrm{A}v_t\\
\mathrm{F}_1(s)\kappa(s)+\mathrm{F}_2'(s)+\cos\theta(s) q_y(s) +\sin\theta(s) q_x(s) =\rho\mathrm{A}v^2\kappa(s)\\
\mathrm{M}'(s)+\mathrm{F}_2(s) +m(s) =\rho I_0\left( \kappa(s) v_t+v^2\kappa'(s) \right)\\
\kappa(s) =-\theta'(s)
\end{cases}
$$

The above simplifies to:

$$
\begin{cases}
\mathrm{m}(s) \kappa(s) +\left( \frac{\mathrm{m}'(s)}{\kappa(s)} \right)'+\mathrm{EI}\left( \frac{\kappa(s)^2}{2}+\frac{\kappa''(s)}{\kappa(s)} \right)'-\sin(\theta(s))\left( \left( \frac{q_x(s)}{\kappa(s)} \right)'+2q_y(s) \right) +\cos(\theta(s))\left( 2q_x(s)\frac{q_y(s)}{\kappa(s)}-\left( \frac{q_y(s)}{\kappa(s)} \right)' \right)=v_t\left( \rho\mathrm{A}+\rho\mathrm{I}_0\kappa(s)^2+\rho\mathrm{I}_0\left( \frac{\kappa'(s)}{\kappa(s)} \right)' \right) +v^2\rho\mathrm{I}_0\left( \left( \frac{\kappa(s)^2}{2} \right)'+\left( \frac{\kappa''(s)}{\kappa(s)} \right)' \right)\\
-\sin(\theta(s))\left( \left( \frac{q_x(s)}{\kappa(s)} \right)'+2q_y(s) \right) +\cos(\theta(s))\left( 2q_x(s)-\left( \frac{q_y(s)}{\kappa(s)} \right)' \right) =\rho\mathrm{A}v_t\\
\mathrm{F}_2(s) \kappa(s) +\left( \frac{\mathrm{F}_2'(s)}{\kappa(s)} \right)'=0\\
\mathrm{m}(s) +\mathrm{EI}\kappa'(s) +\mathrm{F}_2(s) =\rho\mathrm{I}_0\left( v_t\kappa(s) +v^2\kappa'(s) \right)
\end{cases}
$$
