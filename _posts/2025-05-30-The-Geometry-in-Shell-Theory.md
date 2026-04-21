---
title: "The Geometry in Shell Theory"
date: 2025-05-30
  - Geometric Elasticity
  - Shell
---
This note presents the geometry of elastic shells based on [P. Ciarlet's work](https://link.springer.com/article/10.1007/s10659-005-4738-8).
<!-- more -->

We aim to derive the general theory for elastic shells using differential geometry. The primary challenge lies in the complex geometry arising from the shell's natural curvature, which complicates the relationship between strain and displacement, especially under large rotations. This note develops a mathematical framework to systematically compute this relationship.

## 1. Geometric Foundations and Strain Definitions

We begin by establishing the geometric framework for describing shell morphology and defining key strain measures.

A shell surface is parameterized by $\mathbf{r}(x_1,x_2)$, with basis vectors defined as:

$$
\mathbf{a}_\alpha=\frac{\partial \mathbf{r}}{\partial x_\alpha}, \quad 
\mathbf{n}=\frac{\mathbf{a}_1\times\mathbf{a}_2}{\|\mathbf{a}_1\times\mathbf{a}_2\|}
$$

The fundamental forms characterizing the surface geometry are:

- **First fundamental form** (metric tensor): $a_{\alpha\beta}=\partial_\alpha \mathbf{a} \cdot \partial_\beta \mathbf{a}$


- **Second fundamental form** (curvature tensor): $b_{\alpha\beta}=\partial_\alpha\mathbf{a}_\beta\cdot\mathbf{n}$

The shell geometry is described relative to its middle surface:

$$
\mathbf{x}(x_1,x_2,x_3)=\mathbf{r}(x_1,x_2)+x_3\mathbf{n}
$$

Based on these geometric quantities, we define two fundamental strain measures:

- **Membrane strain:** $\varepsilon_{\alpha\beta}^s=\frac{1}{2}(a_{\alpha\beta}-\bar{a}_{\alpha\beta})$
- **Bending strain:** $\varepsilon_{\alpha\beta}^b=b_{\alpha\beta}-\bar{b}_{\alpha\beta}$

where overbars denote quantities in the reference configuration.

## 2. Variational Derivation of Equilibrium Equations

We now derive the governing equations and boundary conditions through variational principles, establishing equilibrium conditions by considering the system's energy variations.

**The variations of the strains** form the core of the energy expression. The membrane strain variation is:

$$
\delta\varepsilon_{\alpha\beta}^s=\frac{1}{2}(\mathbf{a}_\alpha\cdot\delta\mathbf{a}_\beta+\mathbf{a}_\beta\cdot\delta\mathbf{a}_\alpha)
$$

The bending strain variation involves more complex derivation:

$$
\begin{aligned}
\delta\varepsilon_{\alpha\beta}^b&=\delta b_{\alpha\beta}=\delta(\partial_{\alpha\beta}\mathbf{r}\cdot\mathbf{n}) \\
&=\partial_{\alpha\beta}\delta\mathbf{r}\cdot\mathbf{n}-\Gamma_{\alpha\beta}^{\gamma}\mathbf{n}\cdot\delta\mathbf{a}_\gamma
\end{aligned}
$$

**The variation of elastic strain energy** is expressed as:

$$
\delta U_e=\int_\mathcal{S}(n^{\alpha\beta}\delta\varepsilon_{\alpha\beta}^s+m^{\alpha\beta}\delta\varepsilon_{\alpha\beta}^b)\sqrt{|a|}dx_1dx_2
$$

Substituting the strain variations yields:

$$
\delta U_e=\int_\mathcal{S} \left[A^{\alpha\beta}\mathbf{a}_\alpha\cdot\delta\partial_\beta\mathbf{r}+B^{\alpha\beta}\mathbf{n}\cdot\delta\partial_{\alpha\beta}\mathbf{r}-B^{\alpha\beta}\Gamma_{\alpha\beta}^{\gamma}\mathbf{n}\cdot\delta\partial_\gamma\mathbf{r}\right] dx_1dx_2
$$

where $A^{\alpha\beta}=n^{\alpha\beta}\sqrt{\|a\|}$ and $B^{\alpha\beta}=m^{\alpha\beta}\sqrt{\|a\|}$ represent the stress resultants and moment resultants, respectively.

**Applying integration by parts** to the energy variation expression gives the complete form with both domain and boundary terms:

$$
\begin{aligned}
\delta U_e = & \int_\mathcal{S}\left[\partial_{\alpha\beta}(B^{\alpha\beta}\mathbf{n})+\partial_\gamma(B^{\alpha\beta}\Gamma_{\alpha\beta}^{\gamma}\mathbf{n})-\partial_\beta( A^{\alpha\beta}\mathbf{a}_\alpha)\right]\cdot\delta\mathbf{r}  dx_1dx_2 \\
& + \int_{\partial \mathcal{S}}\left[B^{\alpha\beta}\mathbf{n}\cdot\delta\mathbf{a}_\alpha +(A^{\alpha\beta}\mathbf{a}_\alpha-B^{\alpha\gamma}\Gamma_{\alpha\gamma}^\beta \mathbf{n}-\partial_{\alpha}(B^{\alpha\beta}\mathbf{n}))\cdot \delta\mathbf{r}\right]n_\beta ds
\end{aligned}
$$

**Simplification using the Gauss-Weingarten equations**:

$$
\partial_\beta \mathbf{a}_\alpha = \Gamma_{\beta\alpha}^{\gamma}\mathbf{a}_\gamma + b_{\alpha\beta}\mathbf{n}, \quad 
\partial_\alpha\mathbf{n} = -b^{\gamma}_{\alpha}\mathbf{a}_\gamma
$$

leads to the final simplified variational expression with complete boundary terms:

$$
\begin{aligned}
\delta U_e = & \int_{\mathcal{S}}\left[(\partial_{\beta}C^{\beta}+b_{\beta\gamma}D^{\beta\gamma})\mathbf{n}+(\partial_{\beta}D^{\beta\gamma}+\Gamma_{\theta\beta}^{\gamma}D^{\beta\theta}-b_{\beta}^{\gamma}C^{\beta})\mathbf{a}_{\gamma}\right]\cdot \delta\mathbf{r}dx_1dx_2 \\
& + \int_{\partial \mathcal{S}}\left[ B^{\alpha\beta}\mathbf{n}\cdot \delta\mathbf{a}_{\alpha}-\left( D^{\gamma\beta}\mathbf{a}_{\gamma}+C^{\beta}\mathbf{n} \right) \cdot \delta\mathbf{r} \right] n_{\beta}ds
\end{aligned}
$$

where the simplified notation is introduced:

$$
C^{\beta} = \partial_{\alpha}B^{\alpha\beta} + \Gamma_{\alpha\gamma}^{\beta}B^{\alpha\gamma} = \sqrt{|a|} \nabla_{\alpha} m^{\beta\alpha}=\sqrt{|a|}q^{\beta}
$$

$$
D^{\beta\gamma} = -\left( b_{\alpha}^{\gamma}B^{\alpha\beta} + A^{\gamma\beta} \right) = -\sqrt{|a|}(b_\alpha^\gamma m^{\alpha\beta} + s^{\gamma\beta}) = -\sqrt{|a|}p^{\gamma\beta}
$$

where $q^\beta$ is the effective shear force.

**From the stationarity condition**, we obtain the complete set of equilibrium equations and boundary conditions:

**Field equations on $\mathcal{S}$:**

$$
\begin{aligned}
\partial_{\beta}C^{\beta} + b_{\beta\gamma}D^{\beta\gamma} &= f^n\sqrt{|a|} \\
\partial_{\beta}D^{\beta\gamma} + \Gamma_{\theta\beta}^{\gamma}D^{\beta\theta} - b_{\beta}^{\gamma}C^{\beta} &= f^{\gamma}\sqrt{|a|}
\end{aligned}
$$

**Natural boundary conditions on $\partial\mathcal{S}$:**

$$
\begin{aligned}
B^{\alpha\beta}n_\alpha n_\beta &= 0 \quad \text{(Bending moment condition)} \\
(D^{\gamma\beta}\mathbf{a}_\gamma + C^\beta \mathbf{n})n_\beta &= 0 \quad \text{(Force resultant condition)}
\end{aligned}
$$

**Final form of the equilibrium equations:**

The equilibrium equations of the shell can be finally simplified as:

$$
\begin{aligned}
\partial_\alpha m^{\alpha\beta}+\Gamma^{\beta}_{\alpha\gamma}m^{\alpha\gamma}+\Gamma^{\alpha}_{\alpha\gamma}m^{\beta\gamma}=q^{\beta}\\
\partial_\beta q^{\beta}+\Gamma^{\alpha}_{\alpha \beta}q^{\beta}-g_{\gamma\beta} b_\alpha^{\gamma}p^{\alpha\beta}=f^n\\
\partial_\beta p^{\beta\gamma}+\Gamma_{\theta\beta}^{\gamma}p^{\beta\theta}+\Gamma_{\alpha\beta}^{\alpha}p^{\beta\gamma}+b_{\beta}^{\gamma}q^{\beta}=f^{\gamma}
\end{aligned}
$$

with the natural boundary conditions expressed as:

$$
\begin{aligned}
m^{\alpha\beta}n_\alpha n_\beta &= 0 \quad \text{(Bending moment condition)} \\
(q^\beta \mathbf{n}-p^{\gamma\beta}\mathbf{a}_\gamma)n_\beta &= 0 \quad \text{(Force resultant condition)}
\end{aligned}
$$

These equations can be further simplified to a more compact tensor form, but the above formulation explicitly shows all boundary contributions.

## 3. Strain-Displacement Relationships and Constitutive Laws

We complete the theoretical framework by establishing the strain-displacement relationships and material constitutive equations.

**The displacement field** is defined as:

$$
\mathbf{u} = \mathbf{x} - \bar{\mathbf{x}} = u^{\alpha}\mathbf{a}_\alpha + w\mathbf{n}
$$

**The membrane strain** derivation involves the deformed tangent vectors and metric tensor:

$$
\mathbf{a}_\alpha = \bar{\mathbf{a}}_\alpha + \mathbf{u}_{,\alpha}, \quad 
a_{\alpha\beta} = \bar{a}_{\alpha\beta} + \mathbf{a}_\alpha\cdot\mathbf{u}_{,\beta} + \mathbf{a}_\beta\cdot\mathbf{u}_{,\alpha} + \mathbf{u}_{,\alpha}\cdot\mathbf{u}_{,\beta}
$$

Using the geometric relation $\mathbf{a}_{\alpha,\beta} = \Gamma_{\alpha\beta}^{\gamma}\mathbf{a}_{\gamma} - b_{\alpha\beta}\mathbf{n}$, we obtain the Green-Lagrange strain tensor:

$$
\varepsilon_{\alpha\beta}^s = \frac{1}{2}(u_{\alpha,\beta}+u_{\beta,\alpha}+w_{,\alpha}w_{,\beta}) - \Gamma_{\alpha\beta}^{\gamma}u_{\gamma} - b_{\alpha\beta}w
$$

**For the bending strain**, analysis of the deformed normal vector and curvature tensor yields the linearized expression:

$$
\varepsilon_{\alpha\beta}^b \approx w_{,\alpha\beta} - w_{,\gamma}\Gamma_{\alpha\beta}^{\gamma} - w b_\alpha^{\gamma}b_{\gamma\beta}
$$

**The constitutive relations** complete the theoretical framework. The total shell strain combines membrane and bending components:

$$
\varepsilon_{\alpha\beta} = \varepsilon_{\alpha\beta}^s + x_3\varepsilon_{\alpha\beta}^b
$$

**The elastic strain energy density** is given by:

$$
U_e = \frac{1}{2}\int_{\mathcal{S}}\mathcal{A}^{\alpha\beta\gamma\delta}(\mathcal{D}\varepsilon_{\alpha\beta}^s\varepsilon_{\gamma\delta}^s + \mathcal{B}\varepsilon_{\alpha\beta}^b\varepsilon_{\gamma\delta}^b)dS
$$

where the material stiffness coefficients are:

$$
\mathcal{D} = \frac{Eh}{1-\nu^2}, \quad \mathcal{B} = \frac{Eh^3}{12(1-\nu^2)}
$$

and the elastic tensor is:

$$
\mathcal{A}^{\alpha\beta\gamma\delta} = \nu a^{\alpha\beta}a^{\gamma\delta} + \frac{1-\nu}{2}(a^{\alpha\gamma}a^{\beta\delta} + a^{\alpha\delta}a^{\beta\gamma})
$$

**The stress resultants** are determined by the constitutive relations:

$$
s^{\alpha\beta} = \mathcal{D}\mathcal{A}^{\alpha\beta\gamma\delta}\varepsilon_{\gamma\delta}^s, \quad 
m^{\alpha\beta} = \mathcal{B}\mathcal{A}^{\alpha\beta\gamma\delta}\varepsilon_{\gamma\delta}^b
$$

This completes the general theoretical framework for elastic shells, providing a comprehensive foundation for analyzing shell deformation and stress under various loading conditions, with particular attention to the proper treatment of boundary conditions.

## 4. The axisymmetric case

We consider the special case of axisymmetric shells, the symmetry can be exploited to simplify the equations.
The geometry axisymmetric shell is described by the two parameters: the arc-length of the cross section curve $s$ and the rotation angle $\phi$. We assume the radius the cross section circle is $R(s)$, the shape of the shell can be written as:

$$
\mathbf{x}=\{R(s)\cos\phi, R(s)\sin\phi, z(s)\},
$$

where $z(s)$ is the vertical coordinate.
We define the slope angle of cross section curve as $\psi$, we have:

$$
\frac{d}{ds}R(s) = \cos\psi(s), \quad
\frac{d}{ds}z(s) = \sin\psi(s)
$$

The none zero component of the Christoffel symbols is:

$$
\Gamma^{\phi}_{s \phi} = \frac{\cos\psi(s)}{R(s)},
\quad
\Gamma^{s}_{\phi \phi} = -R(s)\cos \psi(s)
$$

The control equation can be simplified as:

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

The constitutive law for the axisymmetric case is:

$$
n_{s}^{s} = S\left[\left(1-a^{s s}\bar{a}_{s s}\right)+\nu\left(1-a^{\phi\phi}\bar{a}_{\phi\phi}\right)\right], \\
n_{\phi}^{\phi} = S\left[\left(1-a^{\phi\phi}\bar{a}_{\phi\phi}\right)+\nu\left(1-a^{s s}\bar{a}_{s s}\right)\right], \\
m_{s}^{s} = B\left[\left(\kappa_{s}-a^{s s}\bar{a}_{s s}\bar{\kappa}_{s}\right)+\nu\left(\kappa_{\phi}-a^{\phi\phi}\bar{a}_{\phi\phi}\bar{\kappa}_{\phi}\right)\right], \\
m_{\phi}^{\phi} = B\left[\left(\kappa_{\phi}-a^{\phi\phi}\bar{a}_{\phi\phi}\bar{\kappa}_{\phi}\right)+\nu\left(\kappa_{s}-a^{s s}\bar{a}_{s s}\bar{\kappa}_{s}\right)\right],
$$

Finally the control equation of the axis-symmetry shell can be written as:

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

The geomtery can be recoveried by:

$$
\begin{aligned}
R' &= \cos\psi \\
z' &= \sin\psi
\end{aligned}
$$
