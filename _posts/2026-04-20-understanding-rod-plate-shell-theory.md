---
title: "Understanding Rod, Plate, and Shell Theories"
date: 2026-04-20
tags:
  - Geometric Elasticity
  - Rod
  - Shell
lang: en
ref: understanding-rod-plate-shell-theory
permalink: /2026/04/understanding-rod-plate-shell-theory/
---
Rod, plate, and shell theories are essential for both engineering practice and understanding complex physical phenomena, yet grasping these fundamental theories is far from trivial.

<!-- more -->

# A Geometric Perspective on Rod, Plate, and Shell Theories

> Starting from the integral form of the first law of thermodynamics, combined with invariance under superposed rigid-body motions, we derive the theories of rods, plates, and shells within the Cosserat framework.

---

## Part I — Classical Differential Geometry

### 1.1 Curves in E³

A curve $\mathcal{C} \subset \mathbb{E}^3$ is parametrized by arc length $s$ as $\mathbf{r}(s)$, satisfying $\|\mathrm{d}\mathbf{r}/\mathrm{d}s\| = 1$. The Frenet–Serret frame $\{\mathbf{t}, \mathbf{n}, \mathbf{b}\}$ satisfies:

$$
\frac{\mathrm{d}\mathbf{t}}{\mathrm{d}s} = \kappa \mathbf{n},\quad
\frac{\mathrm{d}\mathbf{n}}{\mathrm{d}s} = -\kappa \mathbf{t} + \tau \mathbf{b},\quad
\frac{\mathrm{d}\mathbf{b}}{\mathrm{d}s} = -\tau \mathbf{n}.
$$

Curvature $\kappa \ge 0$, torsion $\tau$. Under an arbitrary parameter $\theta$: $\mathrm{d}s = \|\mathbf{r}_{,\theta}\|\,\mathrm{d}\theta$, $\mathbf{t} = \mathbf{r}_{,\theta}/\|\mathbf{r}_{,\theta}\|$.

### 1.2 Surfaces in E³

A surface $\mathcal{S}$ is parametrized by Gauss coordinates $\theta^\alpha$ ($\alpha=1,2$):

$$
\mathbf{r} = \mathbf{r}(\theta^1,\theta^2).
$$

**Base vectors**: $\mathbf{a}_\alpha = \mathbf{r}_{,\alpha}$, unit normal $\mathbf{a}_3 = \mathbf{a}_1\times\mathbf{a}_2/\|\mathbf{a}_1\times\mathbf{a}_2\|$.

**First fundamental form** (metric tensor):

$$
a_{\alpha\beta} = \mathbf{a}_\alpha\cdot\mathbf{a}_\beta,\qquad a = \det(a_{\alpha\beta}).
$$

**Second fundamental form**:

$$
b_{\alpha\beta} = \mathbf{a}_3\cdot\mathbf{a}_{\alpha,\beta} = -\mathbf{a}_{3,\alpha}\cdot\mathbf{a}_\beta,
\quad b_{\alpha\beta} = b_{\beta\alpha}.
$$

**Christoffel symbols**:

$$
\Gamma^\gamma_{\alpha\beta} = \tfrac12 a^{\gamma\delta}(a_{\alpha\delta,\beta}+a_{\beta\delta,\alpha}-a_{\alpha\beta,\delta}).
$$

**Gauss–Weingarten equations**:

$$
\mathbf{a}_{\alpha,\beta} = \Gamma^\gamma_{\alpha\beta}\mathbf{a}_\gamma + b_{\alpha\beta}\mathbf{a}_3,\qquad
\mathbf{a}_{3,\alpha} = -b^\beta_\alpha\mathbf{a}_\beta,\quad b^\beta_\alpha = a^{\beta\gamma}b_{\gamma\alpha}.
$$

**Gauss–Codazzi equations**:

$$
R_{\alpha\beta\gamma\delta} = b_{\alpha\gamma}b_{\beta\delta} - b_{\alpha\delta}b_{\beta\gamma},\qquad
b_{\alpha\beta|\gamma} = b_{\alpha\gamma|\beta}.
$$

**Riemann–Christoffel tensor**:
$R^\delta_{\alpha\beta\gamma} = \Gamma^\delta_{\alpha\gamma,\beta} - \Gamma^\delta_{\alpha\beta,\gamma} + \Gamma^\epsilon_{\alpha\gamma}\Gamma^\delta_{\epsilon\beta} - \Gamma^\epsilon_{\alpha\beta}\Gamma^\delta_{\epsilon\gamma}$.

**Gaussian and mean curvatures**:

$$
K = \frac{\det(b_{\alpha\beta})}{\det(a_{\alpha\beta})},\qquad
H = \tfrac12 b^\alpha_\alpha.
$$

**Area element rate of change** (used in localization of balance laws):

$$
\frac{\mathrm{D}}{\mathrm{D}t}(\mathrm{d}a) = (v^\alpha_{|\alpha} - b^\alpha_\alpha v_3)\,\mathrm{d}a,
$$

where $v^\alpha = \dot{\mathbf{r}}\cdot\mathbf{a}^\alpha$, $v_3 = \dot{\mathbf{r}}\cdot\mathbf{a}^3$, and the vertical bar $|$ denotes covariant differentiation.

> **Summary 1.1**
>
> - Curves are described by the Frenet frame $\{\mathbf{t},\mathbf{n},\mathbf{b}\}$ and $\kappa,\tau$
> - Surfaces are described by $\{a_{\alpha\beta}, b_{\alpha\beta}\}$, satisfying the Gauss–Codazzi equations
> - The area element rate formula is a key tool for localization

---

## Part II — Cosserat Rods (Directed Curves)

### 2.1 Kinematics

A Cosserat rod consists of a curve $\mathbf{r} = \mathbf{r}(\theta,t)$ and two directors $\mathbf{d}_\alpha(\theta,t)$ ($\alpha=1,2$). Define the base vectors:

$$
\mathbf{a}_\alpha = \mathbf{d}_\alpha,\qquad \mathbf{a}_3 = \mathbf{r}_{,\theta}.
$$

The set $\{\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3\}$ constitutes a convected frame; $\mathbf{a}^i$ are the dual basis vectors: $\mathbf{a}^i\cdot\mathbf{a}_j = \delta^i_j$. The metric tensor:

$$
a_{ij} = \mathbf{a}_i\cdot\mathbf{a}_j,\qquad a = \det(a_{ij}).
$$

Frame gradient (wryness):

$$
\kappa_{ir} = \mathbf{a}_r\cdot\mathbf{a}_{i,\theta},\qquad
\kappa_{ir} + \kappa_{ri} = a_{ir,\theta}.
$$

Velocity field: $\mathbf{v} = \dot{\mathbf{r}}$, $\mathbf{w}_\alpha = \dot{\mathbf{d}}_\alpha$. Velocity gradient:

$$
c_{ki} = \mathbf{a}_k\cdot\dot{\mathbf{a}}_i = \eta_{ki} + \psi_{ki},
$$

where $\eta_{ki} = c_{(ki)}$ is the symmetric part (stretch rate) and $\psi_{ki} = c_{[ki]}$ the antisymmetric part (spin rate).

Having established the kinematic quantities, we now define **strain measures** that characterize the deviation of the rod from its reference configuration. The most natural approach is to compare the current metric $a_{ij}$ with the reference metric $A_{ij}$, and the current frame gradient $\kappa_{\alpha i}$ with the reference gradient $K_{\alpha i}$:

$$
\gamma_{ij} = a_{ij} - A_{ij},\qquad
\sigma_{\alpha i} = \kappa_{\alpha i} - K_{\alpha i}.
$$

$\gamma_{ij}$ measures extension and shear ($i=j=3$ for axial extension, $i=\alpha,j=3$ for shear), while $\sigma_{\alpha i}$ measures bending and twist. This definition follows Green–Laws (1966).

> **Alternative approach**: Cohen (1966) employs a three-director system with Cartan–Ericksen–Truesdell strain measures $Y^\alpha, C_{\alpha\beta}, F^\alpha_\beta$. These can be related to $(\gamma_{ij},\sigma_{\alpha i})$ through projection, but Cohen's third director $Y^3, F^3_\beta$ has no counterpart in the two-director theory.

### 2.2 Integral Form of Energy Balance

To derive the equations of motion and constitutive relations, we need a physical starting point. This starting point is the **first law of thermodynamics** (conservation and conversion of energy) in integral form. For any segment $[\theta_1,\theta_2]$ of the rod, the energy balance states: **the rate of change of the sum of kinetic and internal energies equals the sum of external power, heat supply, and boundary heat flux**. Mathematically:

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2} \rho\Bigl(U + \tfrac12\mathbf{v}\cdot\mathbf{v} + \tfrac12 y^{\alpha\beta}\mathbf{w}_\alpha\cdot\mathbf{w}_\beta\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
= \int_{\theta_1}^{\theta_2} \rho\bigl(r + \mathbf{f}\cdot\mathbf{v} + \mathbf{l}^\alpha\cdot\mathbf{w}_\alpha\bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\mathbf{n}\cdot\mathbf{v} + \mathbf{p}^\alpha\cdot\mathbf{w}_\alpha - h\Bigr]_{\theta_1}^{\theta_2}.
$$

Notation:

- $\rho$: mass per unit length; $U$: internal energy per unit mass
- $\tfrac12\mathbf{v}\cdot\mathbf{v}$: translational kinetic energy density
- $\tfrac12 y^{\alpha\beta}\mathbf{w}_\alpha\cdot\mathbf{w}_\beta$: director rotational kinetic energy density ($y^{\alpha\beta}=y^{\beta\alpha}$ are director inertia coefficients)
- $r$: heat supply per unit mass; $\mathbf{f}$: body force per unit mass
- $\mathbf{l}^\alpha$: director force per unit mass (including inertial correction terms)
- $\mathbf{n}$: resultant contact force; $\mathbf{p}^\alpha$: resultant director contact force
- $h$: heat flux along $\theta$

**This is the starting point of the entire derivation.**

### 2.3 Invariance under Superposed Rigid Translation → Linear Momentum Equation

Consider superposing a uniform rigid-body translational velocity $\mathbf{b}$. In the new motion:

$$
\mathbf{v}^* = \mathbf{v} + \mathbf{b},\qquad 
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha,\qquad
\mathbf{n}^* = \mathbf{n},\qquad
\mathbf{p}^{\alpha*} = \mathbf{p}^\alpha,\qquad
h^* = h,
$$

and $\rho$, $U$, $r$, $\mathbf{f}-\dot{\mathbf{v}}$, $\mathbf{l}^\alpha$ remain unchanged. Substituting $\mathbf{v}\to\mathbf{v}+\mathbf{b}$ into (2.1) and subtracting the original equation, the arbitrariness of $\mathbf{b}$ yields:

**Mass conservation (integral form → local form)**:

$$
\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}} = 0.
$$

**Linear momentum equation (integral form → local form)**:

$$
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{n}}{\partial\theta} + \rho\mathbf{f} = \rho\dot{\mathbf{v}}.
\tag{2.2}
$$

**Derivation logic**: $\mathbf{b}$ arbitrary → coefficients vanish → mass conservation first; then mass conservation simplifies the remaining terms → linear momentum equation (2.2). This step eliminates all kinetic energy terms involving $\mathbf{v}$ from the energy balance.

### 2.4 Invariance under Superposed Rigid Rotation → Angular Momentum Equation

Translational invariance has given us the linear momentum equation. However, the energy balance also contains rotational terms (through $\mathbf{w}_\alpha$ and the spin part of $\mathbf{v}$). These must be constrained by **rigid-rotation invariance**. That is, when we superpose a uniform rigid angular velocity $\boldsymbol{\omega}$, the form of the energy balance for the rod in the same placement must remain unchanged. In the new motion, the transformation rules are:

$$
\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha + \boldsymbol{\omega}\times\mathbf{d}_\alpha,
$$

$$
\eta_{ki}^* = \eta_{ki},\qquad
\psi_{ki}^* = \psi_{ki} - \Omega_{ki},
$$

where $\Omega_{ki} = \varepsilon_{kim}\omega^m$. The quantities $\rho$, $r$, $U$, $\mathbf{n}$, $\mathbf{p}^\alpha$, $\mathbf{q}^\alpha \equiv \mathbf{l}^\alpha - \tfrac12\dot{y}^{\alpha\beta}\mathbf{w}_\beta - y^{\alpha\beta}\ddot{\mathbf{w}}_\beta$ remain unchanged.

Substituting these transformations into the energy equation and using the arbitrariness of $\boldsymbol{\omega}$ yields:

**Angular momentum equation**:

$$
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{m}}{\partial\theta} + \frac{1}{\sqrt{a_{33}}}\mathbf{a}_3\times\mathbf{n} + \rho\dot{\mathbf{g}} = 0,
\tag{2.3}
$$

where the couple resultant and body couple are defined as:

$$
\mathbf{m} = \mathbf{a}_\alpha\times\mathbf{p}^\alpha,\qquad
\dot{\mathbf{g}} = \mathbf{a}_\alpha\times\mathbf{q}^\alpha.
$$

**Component form (symmetry conditions)**:

$$
\pi^{[\alpha\beta]} + \frac{1}{2\sqrt{a_{33}}}\bigl(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha} - p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}\bigr) = 0,
\tag{2.4}
$$

$$
\pi^{\beta3} + \frac{1}{\sqrt{a_{33}}}\bigl(p^{\alpha3}\kappa_\alpha^{\cdot\beta} - p^{\alpha\beta}\kappa_\alpha^{\cdot3}\bigr) - \frac{1}{\sqrt{a_{33}}}n^\beta = 0,
\tag{2.5}
$$

where $\pi^{\alpha i}$ are the combined director forces.

### 2.5 Reduced Energy Equation

Using the corollary of mass conservation (2.2) and the linear momentum equation (2.2), we eliminate the kinetic energy terms from the full energy balance. After localization, we obtain the **reduced energy equation** $[\text{Green–Laws 1966, Eq 3.16}]$:

$$
-\rho\dot{U} + \rho r + \eta_{k\alpha}\,\pi^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\bigl(\dot{\kappa}_{\alpha k} - \eta_{kj}\,\kappa_\alpha^{\cdot j}\bigr)\,\mathbf{p}^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\,\eta_{k3}\,\mathbf{n}\cdot\mathbf{a}^k
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{2.6}
$$

Introducing the Helmholtz free energy $A = U - TS$, the reduced energy equation becomes:

$$
-\rho(\dot{A} + T\dot{S} + \dot{T}S) + \rho r
+ \Bigl[\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta})\Bigr]\eta_{\alpha\beta}
+ \frac{2}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta})\eta_{\beta3}
+ \frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3})\eta_{33}
+ \frac{1}{\sqrt{a_{33}}}p^{\alpha i}\dot{\kappa}_{\alpha i}
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{2.7}
$$

### 2.6 Clausius–Duhem Entropy Inequality

The integral form of the second law $[\text{Green–Laws 1966, Eq 3.18}]$:

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2} \rho S\sqrt{a_{33}}\,\mathrm{d}\theta
- \int_{\theta_1}^{\theta_2} \frac{\rho r}{T}\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\frac{h}{T}\Bigr]_{\theta_1}^{\theta_2} \ge 0.
$$

Localization yields:

$$
\rho\dot{S}T - \rho r + \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta}
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\tag{2.8}
$$

### 2.7 Elastic Rod Constitutive Theory

For an elastic rod, the free energy function takes the form $[\text{Green–Laws 1966, Eq 5.1}]$:

$$
A = A(T, \gamma_{ij}, \sigma_{\alpha i}),
$$

where $\gamma_{ij} = a_{ij}-A_{ij}$, $\sigma_{\alpha i} = \kappa_{\alpha i}-K_{\alpha i}$. Note that $\dot{\gamma}_{ij}=2\eta_{ij}$, $\dot{\sigma}_{\alpha i}=\dot{\kappa}_{\alpha i}$.

Substituting $\dot{A}$ into the Clausius–Duhem inequality (2.8) combined with the reduced energy equation (2.7), and using the independence of the strain rates $\{\eta_{ij},\dot{\kappa}_{\alpha i}\}$ and $\dot{T}$, we obtain:

**Entropy state equation**:

$$
S = -\frac{\partial A}{\partial T}.
\tag{2.9}
$$

**Stress constitutive equations**:

$$
\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) = 2\rho\frac{\partial A}{\partial\gamma_{33}},
$$

$$
\frac{1}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) = \rho\frac{\partial A}{\partial\gamma_{\beta3}},
$$

$$
\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}},
$$

$$
\frac{1}{\sqrt{a_{33}}}p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}}.
\tag{2.10}
$$

**Heat conduction inequality**:

$$
-h\,\frac{\partial T}{\partial\theta} \ge 0.
\tag{2.11}
$$

For isotropic materials, the free energy can be expressed in terms of invariants $[\text{Kafadar 1972}]$:

$$
A = A(I_1,I_2,I_3,I_4,I_5,T),\quad
I_1 = \tfrac12\mathfrak{C}\cdot\mathfrak{C},\; I_2 = \mathfrak{C}\cdot\Gamma,\; I_3 = \tfrac12\Gamma\cdot\Gamma,\;
I_4 = \mathfrak{C}\cdot\Lambda,\; I_5 = \Gamma\cdot\Lambda.
$$

The constitutive coefficients $\alpha_n = \rho_0\partial A/\partial I_n$ give the stress–strain relations for a transversely isotropic rod:

$$
\mathbf{t} = \alpha_1 J\boldsymbol{\lambda} + \alpha_2 J\boldsymbol{\gamma} + \alpha_4\boldsymbol{\lambda}^*,\qquad
\mathbf{m} = \alpha_2 J\boldsymbol{\lambda} + \alpha_3 J\boldsymbol{\gamma} + \alpha_5\boldsymbol{\lambda}^*.
$$

### 2.8 Special Cases

**Kirchhoff rod** (inextensible, unshearable): $a_{ij}=\delta_{ij}$, $\gamma_{ij}=0$. The directors coincide with the Frenet frame: $\mathbf{d}_1=\mathbf{n}$, $\mathbf{d}_2=\mathbf{b}$, $\mathbf{d}_3=\mathbf{t}$. The curvature $\kappa$ and torsion $\tau$ of the rod satisfy:

Free energy $A = A(T, \bar\kappa,\bar\kappa',\bar\tau)$, where $\bar\kappa=\kappa-\kappa_0$, $\bar\kappa'=\kappa'-\kappa_0'$, $\bar\tau=\tau-\tau_0$. The couple constitutive relations:

$$
m_1 = \rho\frac{\partial A}{\partial\bar\kappa},\quad
m_2 = \rho\frac{\partial A}{\partial\bar\kappa'},\quad
m_3 = \rho\frac{\partial A}{\partial\bar\tau}.
$$

**Euler elastica**: small deformation, no twist, $A = \tfrac12 EI \kappa^2$, buckling critical load $P_{\mathrm{cr}} = \pi^2 EI/(4L^2)$.

> **Summary 2.1**
>
> - Start from the integral energy balance (2.1)
> - Superposed rigid translation → linear momentum equation (2.2)
> - Superposed rigid rotation → angular momentum equation (2.3) + symmetry conditions (2.4)–(2.5)
> - Eliminate kinetic terms → reduced energy equation (2.6)–(2.7)
> - Clausius–Duhem inequality → (2.9)–(2.11)
> - Use strain energy function $A(T,\gamma_{ij},\sigma_{\alpha i})$ to obtain elastic constitutive relations

---

## Part III — Cosserat Plates and Shells (Directed Surfaces)

### 3.1 Kinematics

A Cosserat surface consists of a position vector $\mathbf{r} = \mathbf{r}(\theta^\alpha,t)$ and one director $\mathbf{d}(\theta^\alpha,t)$. Define the base vectors:

$$
\mathbf{a}_\alpha = \mathbf{r}_{,\alpha},\qquad \mathbf{a}_3 = \mathbf{d}.
$$

Note that unlike the classical surface, $\mathbf{a}_3$ is no longer a unit normal but a deformable director that can stretch and shear. The metric tensor:

$$
a_{ij} = \mathbf{a}_i\cdot\mathbf{a}_j,\qquad a = \det(a_{\alpha\beta}).
$$

**Gauss–Weingarten type equations**:

$$
\mathbf{a}_{\alpha,\beta} = \Gamma^\gamma_{\alpha\beta}\mathbf{a}_\gamma + b_{\alpha\beta}\mathbf{a}_3,\qquad
\mathbf{d}_{,\alpha} = \lambda_{\alpha i}\,\mathbf{a}^i = \lambda^{\,i}_{\alpha}\mathbf{a}_i,
$$

where $b_{\alpha\beta}$ is the generalized second fundamental form, and $\lambda_{i\alpha} = \mathbf{a}_i\cdot\mathbf{d}_{,\alpha}$ is the director gradient.

Velocity field: $\mathbf{v} = \dot{\mathbf{r}}$, $\mathbf{w} = \dot{\mathbf{d}}$.

### 3.2 Strain Measures

Following the same思路 as the rod derivation (Section 2.1), we define strain measures for the shell that characterize the deviation of the surface from its reference configuration. The shell has three independent deformation modes: **in-plane stretch and shear** (described by changes in the first fundamental form), **bending** (described by changes in the director gradient), and **transverse shear and thickness stretch** (described by changes in the director itself). Therefore, the strain measures are taken as $[\text{Green–Naghdi–Wainwright 1965}]$:

$$
e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta}),\qquad
\kappa_{i\alpha} = \lambda_{i\alpha} - \Lambda_{i\alpha},\qquad
\delta_i = d_i - D_i.
$$

$e_{\alpha\beta}$ is the in-plane strain, $\kappa_{i\alpha}$ is the bending-shear strain (director gradient change), and $\delta_i$ is the director displacement (cross-sectional deformation).

### 3.3 Integral Form of Energy Balance

Following the same logic as the rod derivation, we start from the integral form of the first law of thermodynamics. For any region $\sigma$ on the surface with boundary $\mathcal{C}$, the energy balance states: **the rate of change of the sum of kinetic and internal energies equals the sum of external power, heat supply, and boundary heat flux**:

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma \bigl(\tfrac12\rho\mathbf{v}\cdot\mathbf{v} + \rho U\bigr)\,\mathrm{d}\sigma
= \int_\sigma \rho\bigl(r + \mathbf{F}\cdot\mathbf{v} + \bar{\mathbf{L}}\cdot\mathbf{w}\bigr)\,\mathrm{d}\sigma
+ \int_{\mathcal{C}}\bigl(\mathbf{N}\cdot\mathbf{v} + \mathbf{M}\cdot\mathbf{w} - h\bigr)\,\mathrm{d}c.
\tag{3.1}
$$

Notation:

- $\rho$: mass per unit area
- $\mathbf{F}$: body force per unit mass; $\bar{\mathbf{L}}$: director force per unit mass (including inertial correction)
- $\mathbf{N}$: boundary force; $\mathbf{M}$: boundary director force
- $h$: boundary heat flux

**This is the starting point for the surface theory, completely parallel to the rod theory (2.1).**

### 3.4 Invariance under Superposed Rigid Motion → Equations of Motion

Following the same logic as the rod derivation (Section 2.3), translational invariance eliminates the translational kinetic energy terms from the energy balance and yields the linear momentum equation. **Translational invariance**: superpose $\mathbf{v}\to\mathbf{v}+\mathbf{b}$, $\mathbf{w}\to\mathbf{w}$. The arbitrariness of $\mathbf{b}$ separates the mass conservation and linear momentum equation from other terms.

**Mass conservation**:

$$
\frac{\mathrm{D}\rho}{\mathrm{D}t} + \rho(v^\alpha_{|\alpha} - b^\alpha_\alpha v_3) = 0.
\tag{3.2}
$$

**Linear momentum equation**:

$$
\mathbf{N}^\alpha_{|\alpha} + \rho\mathbf{F} = \rho\dot{\mathbf{v}}.
\tag{3.3}
$$

where $\mathbf{N}^\alpha$ is the stress resultant tensor, and the vertical bar $|$ denotes covariant differentiation on the surface. Component form:

$$
N^{\beta\alpha}_{|\alpha} - b^\beta_\alpha N^{3\alpha} + \rho F^\beta = \rho c^\beta,\qquad
N^{3\alpha}_{|\alpha} + b_{\alpha\beta} N^{\beta\alpha} + \rho F^3 = \rho c^3.
\tag{3.4}
$$

**Rotational invariance**: unlike the translational case, rotational invariance deals with the spin terms associated with $\boldsymbol{\omega}$. Superposing $\boldsymbol{\omega}$ gives $\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r}$, $\mathbf{w}^* = \mathbf{w} + \boldsymbol{\omega}\times\mathbf{d}$. The arbitrariness of $\boldsymbol{\omega}$ yields two sets of conditions: the angular momentum equation (moment of momentum) and the cross-symmetry condition for the residual director force:

$$
\mathbf{d}\times\bar{\mathbf{M}} = 0,\quad \bar{\mathbf{M}} = \mathbf{M} - \mathbf{M}^\alpha\nu_\alpha.
\tag{3.5}
$$

**Angular momentum equation**:

$$
\mathbf{N}^\alpha\times\mathbf{a}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{|\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = 0.
\tag{3.6}
$$

### 3.5 Reduced Energy Equation → Clausius–Duhem Inequality

Using the linear momentum equation (3.3) and mass conservation (3.2) to eliminate the kinetic energy terms from the full energy balance (3.1), after localization we obtain the reduced energy equation $[\text{Green–Naghdi–Wainwright 1965, Eq 4.6}]$:

$$
\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} = 0,
\tag{3.7}
$$

where $N'^{\alpha\beta} = N^{\beta\alpha} - m^\alpha d^\beta - M^{\alpha\gamma}\lambda_{\,.\gamma}^\beta$ is the symmetric effective stress.

**Clausius–Duhem inequality** $[\text{Green–Naghdi–Wainwright 1965, Eq 3.25}]$:

$$
\int_\sigma \rho\dot{S}\,\mathrm{d}\sigma - \int_\sigma \frac{\rho r}{T}\,\mathrm{d}\sigma + \int_{\mathcal{C}} \frac{h}{T}\,\mathrm{d}c \ge 0.
$$

After localization and combination with the reduced energy equation:

$$
-\rho(\dot{A} + \dot{T}S) + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{3.8}
$$

### 3.6 Elastic Cosserat Surface Constitutive Equations

For an elastic shell, the Helmholtz free energy $A = U - TS$ depends on the independent variables $[\text{Green–Naghdi–Wainwright 1965, Eq 5.1}]$:

$$
A = A(T,\,e_{\alpha\beta},\,\kappa_{i\alpha},\,\delta_i).
$$

The relations between strain rates and kinematic quantities: $\dot{e}_{\alpha\beta} = \eta_{\alpha\beta}$, $\dot{\kappa}_{i\alpha} = \dot{\lambda}_{i\alpha}$, $\dot{\delta}_i = \dot{d}_i$.

Substituting $\dot{A} = \frac{\partial A}{\partial T}\dot{T} + \frac{\partial A}{\partial e_{\alpha\beta}}\eta_{\alpha\beta} + \frac{\partial A}{\partial \kappa_{i\alpha}}\dot{\lambda}_{i\alpha} + \frac{\partial A}{\partial \delta_i}\dot{d}_i$ into (3.8), and using the independence of $\{\eta_{\alpha\beta},\dot{\lambda}_{i\alpha},\dot{d}_i,\dot{T}\}$, we obtain:

**Entropy**:

$$
S = -\frac{\partial A}{\partial T}.
\tag{3.9}
$$

**Elastic constitutive equations**:

$$
N'^{\beta\alpha} = \rho\frac{\partial A}{\partial e_{\alpha\beta}},\qquad
m^i = \rho\frac{\partial A}{\partial \delta_i},\qquad
M^{i\alpha} = \rho\frac{\partial A}{\partial \kappa_{i\alpha}}.
\tag{3.10}
$$

**Heat conduction inequality**:

$$
-q^\alpha T_{,\alpha} \ge 0.
\tag{3.11}
$$

**Joint invariants for isotropic shells**: the free energy $A = A(T, J_1,\dots,J_{24})$, where the 24 joint invariants are spanned by $a_{\alpha\beta}$, $d_i$, $\lambda_{i\alpha}$, and their reference values. For a quadratic isotropic elastic shell, the free energy contains 6 independent elastic coefficients.

### 3.7 Special Cases

**Kirchhoff–Love shell**: $\mathbf{d} = \mathbf{a}_3$ (unit normal), no transverse shear. The in-plane strain is $e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta})$, bending strain is $\kappa_{\alpha\beta} = b_{\alpha\beta} - B_{\alpha\beta}$. The energy reduces to $\tilde{A} = \tilde{A}(T, e_{\alpha\beta}, \kappa_{\alpha\beta})$.

**Reissner–Mindlin type**: $\mathbf{d}$ rotates independently but maintains unit length (inextensible), allowing transverse shear.

**Membrane theory**: bending stiffness is neglected, only the in-plane strain $e_{\alpha\beta}$ is retained, $A = A(T, e_{\alpha\beta})$.

> **Summary 3.1**
>
> - Derivation chain completely parallel to rod theory: integral energy balance (3.1) → translational invariance → (3.2)–(3.3) → rotational invariance → (3.5)–(3.6) → reduced energy (3.7) → Clausius–Duhem (3.8) → elastic constitutive relations (3.9)–(3.10)
> - Surface theory requires handling covariant derivatives, Gaussian curvature effects, and in-plane/out-of-plane deformation of $d_i$
> - Kirchhoff–Love, Reissner–Mindlin, and membrane are three common constrained special cases

---

## Part IV — Connections and Extensions

### 4.1 Reduction from 3D Elasticity to 1D/2D Theories

#### 4.1.1 Green–Laws–Naghdi Series Expansion Method

Rather than taking the Cosserat theory as a primitive hypothesis, one can start from classical 3D continuum mechanics and obtain lower-dimensional theories through series expansion and thickness/cross-sectional integration $[\text{Green–Laws–Naghdi 1968}]$.

**Expansion for shells (one thickness coordinate $\xi$)**:

$$
\mathbf{r}^*(\theta^\alpha,\xi,t) = \mathbf{r}(\theta^\alpha,t) + \sum_{N=1}^\infty \xi^N \mathbf{d}_N(\theta^\alpha,t).
\tag{4.1}
$$

Here $\mathbf{r}$ is the position of the reference surface $\xi=0$, and $\mathbf{d}_1 \equiv \mathbf{d}$ is the principal director. Substituting (4.1) into the 3D energy balance and integrating over $\xi$ yields the exact 2D energy equation (containing infinite series):

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma \rho\Bigl(U + \tfrac12\mathbf{v}\cdot\mathbf{v} + \sum_{N=2}^\infty k^N\mathbf{w}_N\cdot\mathbf{v} + \tfrac12\sum_{M,N=1}^\infty k^{MN}\mathbf{w}_M\cdot\mathbf{w}_N\Bigr)\mathrm{d}\sigma
= \int_\sigma \rho\Bigl(r + \mathbf{F}\cdot\mathbf{v} + \sum_{N=1}^\infty \mathbf{L}^N\cdot\mathbf{w}_N\Bigr)\mathrm{d}\sigma
+ \oint\Bigl(\mathbf{N}\cdot\mathbf{v} + \sum_{N=1}^\infty \mathbf{M}^N\cdot\mathbf{w}_N - h\Bigr)\mathrm{d}c.
\tag{4.2}
$$

**Expansion for rods (two cross-sectional coordinates $\theta^\alpha$)**:

$$
\mathbf{r}^*(\theta^\alpha,\theta,t) = \mathbf{r}(\theta,t) + \sum_N \theta^{\alpha_1}\cdots\theta^{\alpha_n}\mathbf{d}_{\alpha_1\ldots\alpha_n}(\theta,t),\quad n=1,2,\ldots
\tag{4.3}
$$

where $\mathbf{d}_\alpha \equiv \mathbf{a}_\alpha$ serve as directors. Integrating over $\theta^1,\theta^2$ yields the exact 1D energy equation.

**Temperature approximation**: the **only** approximation in the entire derivation is the assumption that temperature is uniform across the thickness/cross-section:

$$
T^*(\theta^\alpha,\xi,t) = T(\theta^\alpha,t)\quad\text{(shell)},\qquad
T^*(\theta^\alpha,\theta,t) = T(\theta,t)\quad\text{(rod)}.
$$

#### 4.1.2 Truncation Approximation → Direct Cosserat Theory

Truncating the base vector expansion:

- **Shell**: $\mathbf{g}_\alpha = \mathbf{a}_\alpha + \xi\,\partial\mathbf{d}/\partial\theta^\alpha$ (first-order in $\xi$); $\mathbf{g}_3$ remains exact
- **Rod**: $\mathbf{g}_\beta$ remains exact; $\mathbf{g}_3 = \mathbf{a}_3 + \theta^\alpha\,\partial\mathbf{d}_\alpha/\partial\theta$ (first-order in $\theta^\alpha$)

Assuming that the applied higher-order director forces vanish ($\bar{L}^{Ni}=0$, $N\ge2$; $q^{\alpha_1\ldots\alpha_n i}=0$, $n\ge2$). Higher-order directors are eliminated through $\partial A/\partial d_{Ni}=0$. The final free energy dependence reduces to:

$$
A' = A'(T, e_{\alpha\beta}, \lambda_{i\alpha}, d_i)\quad\text{(shell)},\qquad
A' = A'(T, \gamma_{ij}, \kappa_{\alpha i})\quad\text{(rod)}.
$$

**Conclusion**: The direct Cosserat theory is the lowest-order truncation of the 3D series expansion. The two formulations are mathematically equivalent, but the elastic coefficients in the direct theory are free parameters, while those in the truncated theory can in principle be identified by integrating the 3D constitutive relations.

#### 4.1.3 Gibbs Function Method: 3D Constitutive → 1D Coefficients

For a linearly elastic rod of circular cross-section, Green (1974 I, §5) uses the Gibbs function $\phi=\phi(\overline{\pi}^{(\alpha\beta)},\overline{\pi}^\alpha,\overline{\pi},p^{\alpha i})$ to achieve 3D → 1D coefficient identification. The cross-sectional stress is decomposed into **four independent modes** $[\text{Green 1974 I, Eq 5.24}]$:

$$
\lambda\phi = \lambda\phi_{\mathrm{F1}} + \lambda\phi_{\mathrm{F2}} + \lambda\phi_{\mathrm{E}} + \lambda\phi_{\mathrm{T}}.
$$

**(a) Bending F1** (about the $A_1$ axis, $\hat{m}_1,\hat{n}_2$ active):

Stress assumption $[\text{Green 1974 I, Eq 5.25}]$:

$$
\sigma_{33} = \frac{\hat{m}_1 x_2}{I},\quad
\sigma_{23} = \frac{\hat{n}_2}{4I(1+\nu)}\Bigl[(\tfrac32+\nu)(R^2-x_2^2) - x_1^2(\tfrac12-\nu)\Bigr] - \frac{\hat{m}_1 RR'}{I}\Bigl[1 - \frac{2}{R^2}(x_1^2+x_2^2)\Bigr],\quad \text{etc.}
$$

Gibbs function:

$$
\lambda\phi_{\mathrm{F1}} = -\frac{\hat{m}_1^2}{2EI}\Bigl\{1 + 4(1+\nu)(R')^2\bigl[\tfrac23 + (R')^2\bigr]\Bigr\}
- \frac{\hat{n}_2^2}{12S\mu(1+\nu)^2}\Bigl[(7+14\nu+8\nu^2) + \frac{3(3+\nu)(1+2\nu)^2(R')^2}{2(1+\nu)}\Bigr]
+ \hat{n}_2\hat{m}_1\frac{RR'}{3EI}\Bigl[1 - 3(1+2\nu)(R')^2 - \frac{3\nu(1+2\nu)}{2(1+\nu)}\Bigr].
\tag{4.4}
$$

For a uniform cross-section rod ($R'=0$):

$$
\lambda\phi_{\mathrm{F1}} = -\frac12\frac{\hat{m}_1^2}{EI} - \frac{1}{12}\frac{\hat{n}_2^2(7+14\nu+8\nu^2)}{\mu S(1+\nu)^2}.
\tag{4.5}
$$

**(b) Bending F2** (about the $A_2$ axis, $\hat{m}_2,\hat{n}_1$ active): completely symmetric to F1.

**(c) Extension E** ($\hat{n}_3,\hat{\pi}_{11},\hat{\pi}_{22}$ active):

$$
\lambda\phi_{\mathrm{E}} = -\frac{\hat{n}_3^2}{2ES}\Bigl[1 + \tfrac12(1+\nu)(R')^2 + \tfrac23(1-\nu)(R')^4\Bigr]
- \frac{\hat{\pi}_{11}^2+\hat{\pi}_{22}^2}{2ES} + \frac{\nu}{ES}\bigl[\hat{\pi}_{11}\hat{\pi}_{22} + \hat{n}_3(\hat{\pi}_{11}+\hat{\pi}_{22})\bigr].
\tag{4.6}
$$

**(d) Torsion T** ($\hat{m}_3$ active):

$$
\lambda\phi_{\mathrm{T}} = -\frac{\hat{m}_3^2}{2\mu J}\Bigl[1 + \frac23(R')^2\Bigr],\quad J = \frac12\pi R^4.
\tag{4.7}
$$

Constitutive equations (uniform cross-section, $R'=0$) $[\text{Green 1974 I, Eqs 5.47–5.50}]$:

$$
\hat{m}_1 = EI\,\hat{\kappa}_{23},\quad
\hat{n}_2 = \frac{6S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{23},
$$

$$
\hat{m}_2 = -EI\,\hat{\kappa}_{13},\quad
\hat{n}_1 = \frac{6S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{13},
$$

$$
\hat{n}_3 = C\Bigl[\hat{\gamma}_{33} + \frac{\nu}{1-\nu}(\hat{\gamma}_{11}+\hat{\gamma}_{22})\Bigr],\quad
\hat{\pi}_{11} = C\Bigl[\hat{\gamma}_{11} + \frac{\nu}{1-\nu}(\hat{\gamma}_{22}+\hat{\gamma}_{33})\Bigr],
$$

$$
\hat{m}_3 = \frac12\mu J(\hat{\kappa}_{12} - \hat{\kappa}_{21}),\quad
C = \frac12\frac{ES(1-\nu)}{(1+\nu)(1-2\nu)}.
\tag{4.8}
$$

Helmholtz free energy form $[\text{Green 1974 I, Eq 5.52}]$:

$$
\lambda\psi_{\mathrm{F1}} = \tfrac12 EI\,\hat{\kappa}_{23}^2 + \frac{3S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{23}^2,\quad
\lambda\psi_{\mathrm{F2}} = \tfrac12 EI\,\hat{\kappa}_{13}^2 + \frac{3S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{13}^2,
$$

$$
\lambda\psi_{\mathrm{E}} = \tfrac14 C\Bigl[\hat{\gamma}_{11}^2+\hat{\gamma}_{22}^2+\hat{\gamma}_{33}^2 + \frac{2\nu}{1-\nu}(\hat{\gamma}_{11}\hat{\gamma}_{22}+\hat{\gamma}_{11}\hat{\gamma}_{33}+\hat{\gamma}_{22}\hat{\gamma}_{33})\Bigr],
$$

$$
\lambda\psi_{\mathrm{T}} = \tfrac18 \mu J(\hat{\kappa}_{12}-\hat{\kappa}_{21})^2.
\tag{4.9}
$$

**Quadratic free energy decomposition (Green 1974 II framework)**:

$$
2\lambda\psi = 2\lambda\psi_{\mathrm{F1}} + 2\lambda\psi_{\mathrm{F2}} + 2\lambda\psi_{\mathrm{E}} + 2\lambda\psi_{\mathrm{T}},
$$

where $[\text{Green 1974 II, Eqs 9.4–9.7}]$:

$$
2\lambda\psi_{\mathrm{F1}} = k_5\gamma_{23}^2 + k_{15}\kappa_{23}^2,\quad
2\lambda\psi_{\mathrm{F2}} = k_6\gamma_{13}^2 + k_{16}\kappa_{13}^2,
$$

$$
2\lambda\psi_{\mathrm{E}} = k_1\gamma_{11}^2 + k_2\gamma_{22}^2 + k_3\gamma_{33}^2 + k_7\gamma_{11}\gamma_{22} + k_8\gamma_{11}\gamma_{33} + k_9\gamma_{22}\gamma_{33} + k_{10}\kappa_{11}^2 + k_{11}\kappa_{22}^2 + k_{17}\kappa_{11}\kappa_{22},
$$

$$
2\lambda\psi_{\mathrm{T}} = \tfrac14 k_4(\gamma_{12}+\gamma_{21})^2 + k_{12}\kappa_{12}^2 + k_{13}\kappa_{21}^2 + k_{14}\kappa_{12}\kappa_{21}.
$$

**Derivation of Timoshenko beam equations**: the F1 mode for a uniform cross-section gives:

$$
\frac{\partial\hat{n}_2}{\partial\xi} + \rho f_2 = \rho c_2,\qquad
\frac{\partial\hat{m}_1}{\partial\xi} - \hat{n}_2 + \rho\hat{q}_{23} = 0.
$$

Substituting the constitutive relations $[\text{Green 1974 II, Eq 8.41}]$:

$$
\frac{\partial}{\partial\xi}\Bigl[k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr) + k_{34}\frac{\partial\bar{\delta}_{23}}{\partial\xi}\Bigr] + \rho f_2 = \rho c_2,
$$

$$
\frac{\partial}{\partial\xi}\Bigl[k_{15}\frac{\partial\bar{\delta}_{23}}{\partial\xi} + k_{34}\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr)\Bigr] - k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr) - k_{34}\frac{\partial\bar{\delta}_{23}}{\partial\xi} + \rho\hat{q}_{23} = 0.
\tag{4.10}
$$

**Shear correction factor** (circular cross-section rod):

$$
\hat{n}_2 = \frac{6S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{23} \quad\Longrightarrow\quad
\kappa = \frac{6(1+\nu)^2}{7+14\nu+8\nu^2}.
$$

For $\nu=0.3$, $\kappa\approx0.886$, consistent with Cowper (1966).

### 4.2 Thermal Effects

**Non-isothermal theory** (Green–Naghdi 1970): temperature $T$ enters as an independent variable in the free energy $A = A(T, \gamma_{ij}, \sigma_{\alpha i})$. Entropy $S = -\partial A/\partial T$, heat conduction constitutive relation $h = -k\,\partial T/\partial\theta$.

**Temperature uniformity across the cross-section**: this is the only approximation in the reduction from 3D. The modified energy equation includes an entropy term:

$$
\rho r - \rho T\dot{S} - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
$$

This is the residual energy equation (heat conduction equation), decoupled from the mechanical constitutive relations.

### 4.3 Constraint Theories

#### 4.3.1 Three Basic Types of Constraints

**(I) Inextensibility**: $\lambda=1$, equivalent to $\mathfrak{C}_K\mathfrak{C}^K=1$, or $\dot{\mathfrak{C}}_K\mathfrak{C}^K=0$. Introduce one Lagrange multiplier $p$ $[\text{Kafadar 1972, Eq 6.1}]$:

$$
t^k = -p\lambda^k + \rho_0\chi_K^k\frac{\partial\psi}{\partial\mathfrak{C}_K},\qquad
m^k = \rho_0\chi_K^k\frac{\partial\psi}{\partial\Gamma_K}.
$$

**(II) Inextensible + No rotation**: $\lambda=1$ and $\boldsymbol{\lambda}=\boldsymbol{\lambda}^*$. Introduce three multipliers $p^k$ $[\text{Kafadar 1972, Eq 6.5}]$:

$$
t^k = -p^k,\qquad
m^k = \rho_0\chi_K^k\frac{\partial\psi}{\partial\Gamma_K}.
$$

In this case $\mathbf{t}$ is completely undetermined (limiting case of the classical Kirchhoff rod).

**(III) Pure rotation constraint**: $\boldsymbol{\lambda}=\boldsymbol{\lambda}^*$ (compressible). Introduce three multipliers $\pi_m$ $[\text{Kafadar 1972, Eq 6.9}]$:

$$
t^k = \rho_0\frac{\partial\psi}{\partial J}\lambda^k - \mu^k,\qquad
m^k = \rho_0\chi_K^k\frac{\partial\psi}{\partial\Gamma_K}.
$$

#### 4.3.2 Naghdi–Rubin Constraint Theory (1984)

The constraint theory for rods classifies constraints into three types of deformation mode suppression $[\text{Naghdi–Rubin 1984}]$:

1. **Normal cross-sectional extension**: $|\bar{\mathbf{d}}_1| = |\bar{\mathbf{D}}_1|$, $|\bar{\mathbf{d}}_2| = |\bar{\mathbf{D}}_2|$
2. **Tangential shear** (perpendicularity of director and tangent): $\mathbf{d}_\alpha\cdot\mathbf{d}_3 = \mathbf{D}_\alpha\cdot\mathbf{D}_3$
3. **Normal shear** (cross-sectional distortion): $\bar{\mathbf{d}}_1\cdot\bar{\mathbf{d}}_2/(|\bar{\mathbf{d}}_1||\bar{\mathbf{d}}_2|) = \bar{\mathbf{D}}_1\cdot\bar{\mathbf{D}}_2/(|\bar{\mathbf{D}}_1||\bar{\mathbf{D}}_2|)$

Rate form of the constraint equations (e.g., tangential shear) $[\text{Naghdi–Rubin 1984, Eq 3.16}]$:

$$
\mathbf{d}_\alpha\cdot\frac{\partial\mathbf{v}}{\partial\xi} + \mathbf{d}_3\cdot\mathbf{w}_\alpha = 0.
$$

Lagrange multiplier form: decompose stress into a determinate part $\hat{(\cdot)}$ and a multiplier part $\bar{(\cdot)}$:

$$
\mathbf{n} = \hat{\mathbf{n}} + \bar{\mathbf{n}},\quad
\mathbf{k}^\alpha = \hat{\mathbf{k}}^\alpha + \bar{\mathbf{k}}^\alpha,\quad
\mathbf{m}^\alpha = \hat{\mathbf{m}}^\alpha + \bar{\mathbf{m}}^\alpha,
$$

$$
\bar{\mathbf{n}} = -\sum_{M=0}^N \mathbf{A}^M p_M,\quad
\bar{\mathbf{k}}^\alpha = -\sum_{M=0}^N \mathbf{B}^{M\alpha} p_M,\quad
\bar{\mathbf{m}}^\alpha = -\sum_{M=0}^N \mathbf{C}^{M\alpha} p_M.
$$

**Bernoulli–Euler constraint theory** (suppressing all three deformation modes):

$$
\bar{\mathbf{n}} = -p^{\alpha3}\mathbf{d}_\alpha,\quad
\bar{\mathbf{k}}^\alpha = -p^{(\alpha\beta)}\mathbf{d}_\beta - p^{\alpha3}\mathbf{d}_3,\quad
\bar{\mathbf{m}}^\alpha = 0.
$$

The multipliers $p^{\alpha\beta}, p^{\alpha3}$ are determined by the equilibrium equations and are not constitutive.

#### 4.3.3 Cross-Sectional Extension Effects (Naghdi–Rubin 1989)

The 1989 paper introduces cross-sectional normal extension on top of the Bernoulli–Euler constraints, allowing $\gamma_{11},\gamma_{22}\neq0$. For a uniform cross-section beam:

Constitutive coefficients $[\text{Naghdi–Rubin 1989, Eqs 17–21}]$:

$$
\alpha_1 = \alpha_2 = \alpha_3 = \frac{E h w (1-\nu)}{(1+\nu)(1-2\nu)},\quad
\alpha_7 = \alpha_8 = \alpha_9 = \frac{\nu\alpha_1}{1-\nu},
$$

$$
\alpha_6 = \frac56\mu h w,\quad
\alpha_{16} = \frac{E h^3 w}{12}.
$$

The governing equation involves a fourth-order differential operator $[\text{Naghdi–Rubin 1989, Eq 35}]$:

$$
\frac{\mathrm{d}^4\bar{\delta}_{13}}{\mathrm{d}z^4} - 2b^2\frac{\mathrm{d}^2\bar{\delta}_{13}}{\mathrm{d}z^2} + a^4\bar{\delta}_{13} = 0,
$$

where $a^4 = 4\alpha/(h^2\alpha_{16})$, $b^2 = 2\alpha/(h^2\alpha_6)$. This theory can predict boundary layer effects in contact problems for semi-infinite beams (thickness-dependent correction to Saint-Venant's principle).

### 4.4 Thermo-Electro-Magnetic Interactions

Green–Naghdi (1979, 1985) incorporate electromagnetic interactions into the Cosserat theory. The 3D energy equation gains an electromagnetic power term $[\text{Green–Naghdi 1985, Eq A.2}]$:

$$
\rho^* r^* - \mathrm{div}^*\mathbf{q}^* - \rho^*\dot{\epsilon}^* + \rho^* w_{\mathrm{e}}^* + \mathbf{T}\cdot\mathbf{L}^* + \tfrac12\rho^*\boldsymbol{\Gamma}_{\mathrm{e}}^*\cdot\mathbf{L}^* = 0,
$$

where the electromagnetic power expansion is:

$$
\rho^*w_{\mathrm{e}}^* + \tfrac12\rho^*\boldsymbol{\Gamma}_{\mathrm{e}}^*\cdot\mathbf{L}^* = \mathbf{T}_{\mathrm{e}}\cdot\mathbf{L}^* + \mathbf{e}^*\cdot\mathbf{j}^* + \mathbf{e}^*\cdot(\dot{\bar{\mathbf{d}}} + \bar{\mathbf{d}}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\bar{\mathbf{d}}) + \mathbf{h}^*\cdot(\dot{\mathbf{b}} + \mathbf{b}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\mathbf{b}).
$$

The term $\mathbf{e}^*\cdot\mathbf{j}^*$ is the electromagnetic Joule heat. **Maxwell's equations** are added as auxiliary field equations:

$$
\mathrm{curl}^*\mathbf{e}^* = -(\dot{\mathbf{b}} + \mathbf{b}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\mathbf{b}),\quad
\mathrm{div}^*\mathbf{b} = 0,
$$

$$
\mathrm{curl}^*\mathbf{h}^* = \mathbf{j}^* + \dot{\bar{\mathbf{d}}} + \bar{\mathbf{d}}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\bar{\mathbf{d}},\quad
\mathrm{div}^*\bar{\mathbf{d}} = e.
$$

The force equation gains the **Lorentz force** $\rho_e\mathbf{E} + \mathbf{J}\times\mathbf{B}$. The free energy is extended to:

$$
\psi = \psi_2(T, \gamma_{ij}, \kappa_{\alpha i}, \tilde{\mathbf{E}}_{MN}, \tilde{\mathbf{H}}_{MN}).
$$

The electromagnetic constitutive relations are derived from the free energy $[\text{Green–Naghdi 1985, Eq 4.12}]$:

$$
\hat{D}^i_{MN} = -\lambda\frac{\partial\psi_2}{\partial\tilde{E}_{MNi}},\qquad
B^i_{MN} = -\lambda\frac{\partial\psi_2}{\partial\tilde{H}_{MNi}}.
$$

### 4.5 Numerical Solution (Cosserat Point Method)

Rubin (2001) treats each node of the Cosserat rod theory as a **Cosserat point** with 6 director variables $\boldsymbol{d}_i$ ($i=0,1,\dots,5$):

$$
\boldsymbol{d}_0 = \mathbf{r}_0,\quad \boldsymbol{d}_1 = \mathbf{d}_{1},\quad \boldsymbol{d}_2 = \mathbf{d}_{2},\quad
\boldsymbol{d}_3 = L^{-1}(\mathbf{r}_2-\mathbf{r}_1),\quad \boldsymbol{d}_4 = L^{-1}(\mathbf{d}_{12}-\mathbf{d}_{11}),\quad \boldsymbol{d}_5 = L^{-1}(\mathbf{d}_{22}-\mathbf{d}_{21}).
$$

**Equilibrium equations** $[\text{Rubin 2001, Eq 5b}]$:

$$
\frac{\mathrm{d}}{\mathrm{d}t}\Bigl[\sum_{j=0}^5 m y^{ij}\boldsymbol{w}_j\Bigr] = m\boldsymbol{b}^i - \boldsymbol{t}^i,
$$

where $\boldsymbol{w}_j = \dot{\boldsymbol{d}}_j$, $y^{ij}$ are inertia coefficients, $\boldsymbol{b}^i$ are body forces, and $\boldsymbol{t}^i$ are contact forces. **Angular momentum conservation** requires:

$$
\sum_{i=1}^5 \boldsymbol{d}_i\times\boldsymbol{t}^i = 0.
$$

**Deformation measures**: $\boldsymbol{F} = \sum_{i=1}^3 \boldsymbol{d}_i\otimes\boldsymbol{D}^i$, $J = \det\boldsymbol{F}$; non-uniform deformation $\boldsymbol{\beta}_1 = \boldsymbol{F}^{-1}\boldsymbol{d}_4 - \boldsymbol{D}_4$, $\boldsymbol{\beta}_2 = \boldsymbol{F}^{-1}\boldsymbol{d}_5 - \boldsymbol{D}_5$.

**Time integration**: Newmark-$\beta$ method, with the formula:

$$
\boldsymbol{d}_{n+1} = \boldsymbol{d}_n + \Delta t\,\boldsymbol{v}_n + \Delta t^2\bigl[(\tfrac12-\beta)\boldsymbol{a}_n + \beta\boldsymbol{a}_{n+1}\bigr],
$$

$$
\boldsymbol{v}_{n+1} = \boldsymbol{v}_n + \Delta t\bigl[(1-\gamma)\boldsymbol{a}_n + \gamma\boldsymbol{a}_{n+1}\bigr].
$$

**Spatial discretization**: when adjacent Cosserat points are connected, they share the nodal variables $\boldsymbol{d}_0,\boldsymbol{d}_1,\boldsymbol{d}_2$, with the force balance condition:

$$
_{I-1}\boldsymbol{m}_2^i + {}_I\boldsymbol{m}_1^i = 0\quad\text{for } I=2,3,\dots,N,\; i=0,1,2.
$$

**Nonlinear solution**: Newton–Raphson iteration, solving at each time step:

$$
\mathbf{K}\,\Delta\mathbf{x} = -\mathbf{R},
$$

where $\mathbf{R}$ is the residual vector (equilibrium equations + constitutive relations) and $\mathbf{K}$ is the tangent stiffness matrix.

**Constraint handling**:

- **Multiplier method**: introduce Lagrange multipliers $p_M$ into the energy functional:
  $$
  \bar{\mathbf{n}} = -\sum\mathbf{A}^M p_M,\quad \bar{\mathbf{k}}^\alpha = -\sum\mathbf{B}^{M\alpha}p_M,\quad \bar{\mathbf{m}}^\alpha = -\sum\mathbf{C}^{M\alpha}p_M.
  $$
- **Penalty method**: add $\tfrac12\epsilon(\text{constraint})^2$ to the energy, with $\epsilon\to\infty$ approximating the constraint

### 4.6 Comparison of Theories

| Aspect                | Direct Cosserat Theory                                                                      | 3D Reduced Truncation Theory                                                 | Classical Engineering Theory                              |
| --------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| Kinematic variables   | $\mathbf{r}, \mathbf{d}_\alpha$ (rod) or $\mathbf{r}, \mathbf{d}$ (shell)                | Infinite series $\mathbf{d}_{\alpha_1\ldots\alpha_n}$, truncated at $n=1$ | $\mathbf{r}$ (displacement)                            |
| Strain measures       | $a_{ij}, \kappa_{\alpha i}$ (rod) or $a_{\alpha\beta}, \lambda_{i\alpha}, d_i$ (shell) | $\gamma_{ij}, \sigma_{\alpha i}$ (3D strain integrals)                       | $\varepsilon_{xx}, \gamma_{xy}, \kappa$ |
| Constitutive coeffs   | Free parameters (require experiments or 3D identification)                                   | Determined by cross-sectional integration of 3D elastic constants              | $E, G, I, J, \kappa$                    |
| Shear deformation     | Naturally included                                                                           | Naturally included                                                            | Requires shear correction factor                        |
| Cross-sectional deformation | Naturally included (through stretch and shear of $\mathbf{d}_\alpha$)                   | Appears only when $N\ge2$                                                | Usually neglected                                  |
| Derivation method     | Integral balance laws + invariance                                                           | 3D balance laws + series expansion + truncation                               | Direct kinematic assumptions + variational method        |

> **Summary 4.1**
>
> - The Green–Laws–Naghdi series expansion method establishes the exact connection between 3D elasticity and direct Cosserat theory
> - The Gibbs function method expresses the elastic coefficients of a circular rod explicitly in terms of $E,\nu$ and cross-sectional geometry
> - The four independent modes (F1, F2, E, T) correspond to Timoshenko beam bending (two planes), extension, and torsion
> - Constraint theory suppresses specific deformation modes via Lagrange multipliers; multiplier parts are determined by equilibrium equations
> - The electromagnetic coupling framework incorporates Maxwell's equations and the Lorentz force into Cosserat theory
> - The Cosserat point method provides a systematic computational framework: Newmark-$\beta$ time integration + Newton–Raphson iteration

### 4.7 Complete Comparison Table of Rod, Plate, and Shell Governing Equations

The following table compares the final governing equations of the three theories using a unified notation. All symbols are defined in Parts II and III.

| Aspect                           | Cosserat Rod (Directed Curve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Cosserat Plate/Shell (Directed Surface)                                                                                                                                                                   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Kinematic variables**    | $\mathbf{r}(\theta,t)$, $\mathbf{d}_\alpha(\theta,t)$                                                                                                                                                                                                                                                                                                                                                                                                                                                        | $\mathbf{r}(\theta^\alpha,t)$, $\mathbf{d}(\theta^\alpha,t)$                                                                                                                               |
| **Base vectors**            | $\mathbf{a}_\alpha = \mathbf{d}_\alpha$, $\mathbf{a}_3 = \mathbf{r}_{,\theta}$                                                                                                                                                                                                                                                                                                                                                                                                                               | $\mathbf{a}_\alpha = \mathbf{r}_{,\alpha}$, $\mathbf{a}_3 = \mathbf{d}$                                                                                                                                |
| **Velocities**              | $\mathbf{v} = \dot{\mathbf{r}}$, $\mathbf{w}_\alpha = \dot{\mathbf{d}}_\alpha$                                                                                                                                                                                                                                                                                                                                                                                                                               | $\mathbf{v} = \dot{\mathbf{r}}$, $\mathbf{w} = \dot{\mathbf{d}}$                                                                                                                       |
| **Deformation rates**       | $\eta_{ki} = \mathbf{a}_{(k}\cdot\dot{\mathbf{a}}_{i)}$                                                                                                                                                                                                                                                                                                                                                                                                                                                       | $\eta_{\alpha\beta} = \mathbf{a}_{(\alpha}\cdot\dot{\mathbf{a}}_{\beta)}$                                                                                                                                |
| **Strain measures**         | $\gamma_{ij} = a_{ij}-A_{ij}$, $\sigma_{\alpha i} = \kappa_{\alpha i}-K_{\alpha i}$                                                                                                                                                                                                                                                                                                                                                                                                                         | $e_{\alpha\beta} = \tfrac12(a_{\alpha\beta}-A_{\alpha\beta})$, $\kappa_{i\alpha} = \lambda_{i\alpha}-\Lambda_{i\alpha}$, $\delta_i = d_i-D_i$                                           |
| **Mass conservation**       | $\dot{\rho} + \rho\,\dfrac{\dot{a}_{33}}{2a_{33}} = 0$                                                                                                                                                                                                                                                                                                                                                                                                                                                        | $\dfrac{\mathrm{D}\rho}{\mathrm{D}t} + \rho(v^\alpha_{\vert\alpha} - b^\alpha_\alpha v_3) = 0$                                                                                                         |
| **Linear momentum**         | $\dfrac{1}{\sqrt{a_{33}}}\dfrac{\partial\mathbf{n}}{\partial\theta} + \rho\mathbf{f} = \rho\dot{\mathbf{v}}$                                                                                                                                                                                                                                                                                                                                                                                                 | $\mathbf{N}^\alpha_{\vert\alpha} + \rho\mathbf{F} = \rho\dot{\mathbf{v}}$                                                                                                                                |
| **Linear momentum (comp.)** | $\dfrac{1}{\sqrt{a_{33}}}\dfrac{\delta n^i}{\delta\theta} + \rho f^i = \rho c^i$                                                                                                                                                                                                                                                                                                                                                                                                                             | $N^{\beta\alpha}_{\vert\alpha} - b^\beta_\alpha N^{3\alpha} + \rho F^\beta = \rho c^\beta$, $N^{3\alpha}_{\vert\alpha} + b_{\alpha\beta}N^{\beta\alpha} + \rho F^3 = \rho c^3$                        |
| **Angular momentum**        | $\dfrac{1}{\sqrt{a_{33}}}\dfrac{\partial\mathbf{m}}{\partial\theta} + \dfrac{1}{\sqrt{a_{33}}}\mathbf{a}_3\times\mathbf{n} + \rho\dot{\mathbf{g}} = \mathbf{0}$, $\mathbf{m} = \mathbf{a}_\alpha\times\mathbf{p}^\alpha$, $\dot{\mathbf{g}} = \mathbf{a}_\alpha\times\mathbf{q}^\alpha$                                                                                                                                                                                                                  | $\mathbf{N}^\alpha\times\mathbf{a}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{\vert\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = \mathbf{0}$                                                       |
| **Symmetry conditions**     | $\pi^{[\alpha\beta]} + \tfrac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha} - p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 0$                                                                                                                                                                                                                                                                                                                                                               | $\varepsilon_{\beta\alpha}[N^{\beta\alpha} + m^\beta d^\alpha + M^{\beta\gamma}\lambda_{\,.\gamma}^\alpha] = 0$                                                                                        |
| **Effective stress**        | $-$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | $N'^{\alpha\beta} = N^{\beta\alpha} - m^\alpha d^\beta - M^{\alpha\gamma}\lambda_{\,.\gamma}^\beta$                                                                                                  |
| **Reduced energy eqn**      | $-\rho\dot{U} + \rho r + \eta_{k\alpha}\pi^\alpha\cdot\mathbf{a}^k + \frac{1}{\sqrt{a_{33}}}(\dot{\kappa}_{\alpha k} - \eta_{kj}\kappa_\alpha^{\cdot j})\mathbf{p}^\alpha\cdot\mathbf{a}^k + \frac{1}{\sqrt{a_{33}}}\eta_{k3}\mathbf{n}\cdot\mathbf{a}^k - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0$                                                                                                                                                                                 | $\rho r - q^\alpha_{\vert\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} = 0$                                                          |
| **Clausius–Duhem**          | $-\rho(\dot{A}+\dot{T}S) + [\pi^{(\alpha\beta)}-\frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta})]\eta_{\alpha\beta} + \frac{2}{\sqrt{a_{33}}}(n^\beta-p^{\alpha3}\kappa_\alpha^{\cdot\beta})\eta_{\beta3} + \frac{1}{\sqrt{a_{33}}}(n^3-p^{\alpha3}\kappa_\alpha^{\cdot3})\eta_{33} + \frac{1}{\sqrt{a_{33}}}p^{\alpha i}\dot{\kappa}_{\alpha i} - \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0$                  | $-\rho(\dot{A}+\dot{T}S) + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0$                                                 |
| **Free energy variables**   | $A(T, \gamma_{ij}, \sigma_{\alpha i})$                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | $A(T, e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i)$                                                                                                                                                       |
| **Entropy state eqn**       | $S = -\dfrac{\partial A}{\partial T}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | $S = -\dfrac{\partial A}{\partial T}$                                                                                                                                                                     |
| **Stress constitutive**     | $\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) = 2\rho\frac{\partial A}{\partial\gamma_{33}}$, $\frac{1}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) = \rho\frac{\partial A}{\partial\gamma_{\beta3}}$, $\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}}$, $\frac{1}{\sqrt{a_{33}}}p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}}$ | $N'^{\beta\alpha} = \rho\frac{\partial A}{\partial e_{\alpha\beta}}$, $m^i = \rho\frac{\partial A}{\partial\delta_i}$, $M^{i\alpha} = \rho\frac{\partial A}{\partial\kappa_{i\alpha}}$                  |
| **Heat conduction ineq**    | $-h\,\dfrac{\partial T}{\partial\theta} \ge 0$                                                                                                                                                                                                                                                                                                                                                                                                                                                                | $-q^\alpha T_{,\alpha} \ge 0$                                                                                                                                                                             |
| **Residual heat eqn**       | $\rho r - \rho T\dot{S} - \dfrac{1}{\sqrt{a_{33}}}\dfrac{\partial h}{\partial\theta} = 0$                                                                                                                                                                                                                                                                                                                                                                                                                     | $\rho r - \rho T\dot{S} + q^\alpha_{\vert\alpha} = 0$                                                                                                                                                     |
| **Boundary condition types**| Ends: specify $\mathbf{n}$ or $\mathbf{r}$; specify $\mathbf{p}^\alpha$ or $\mathbf{d}_\alpha$; specify $h$ or $T$                                                                                                                                                                                                                                                                                                                                                                                           | Boundary: specify $\mathbf{N}^\alpha\nu_\alpha$ or $\mathbf{r}$; specify $\mathbf{M}^\alpha\nu_\alpha$ or $\mathbf{d}$; specify $h$ or $T$                                                      |
| **Special cases**           | Kirchhoff rod (inextensible+unshearable), Euler elastica                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Kirchhoff–Love ($\mathbf{d}=\mathbf{a}_3$), Reissner–Mindlin, membrane                                                                                                                                    |

**Structural homology note**: The derivation chain for both theories is completely parallel -- all follow "integral energy balance → translational invariance → linear momentum → rotational invariance → angular momentum → reduced energy → Clausius–Duhem → constitutive relations". The difference arises from geometric dimensionality: rods are 1D (one curve coordinate $\theta$ plus two directors), shells are 2D (two surface coordinates $\theta^\alpha$ plus one director). In-plane indices $\alpha,\beta$ are $\{1,2\}$ in both cases. The rod's $i,j=3$ corresponds to the tangent direction $\mathbf{a}_3 = \mathbf{r}_{,\theta}$, while the shell's $i=3$ corresponds to the normal $\mathbf{a}_3 = \mathbf{d}$. If we reinterpret the rod's $\mathbf{a}_3$ as a normal and $\mathbf{d}_1,\mathbf{d}_2$ as tangential basis vectors, the two theories become formally unified.

---

## Part V — Moving Frame Formulation

The preceding sections established the theory in convected coordinates, where the basis vectors $\mathbf{a}_i$ deform with the material. In this section, we instead employ **orthonormal moving frames** (moving orthonormal frames) whose basis vectors $\mathbf{e}_i$ satisfy $\mathbf{e}_i\cdot\mathbf{e}_j = \delta_{ij}$, with orientations determined by the local geometry of the curve/surface. Moving frames offer significant advantages in simplifying constitutive relations and in numerical implementation.

### 5.1 Basic Concepts of Moving Frames

**Frenet frame for curves**:

Given an arc-length parametrized curve $\mathbf{r}(s)$, the Frenet frame $\{\mathbf{t},\mathbf{n},\mathbf{b}\}$ satisfies:

$$
\frac{\mathrm{d}\mathbf{t}}{\mathrm{d}s} = \kappa\mathbf{n},\quad
\frac{\mathrm{d}\mathbf{n}}{\mathrm{d}s} = -\kappa\mathbf{t} + \tau\mathbf{b},\quad
\frac{\mathrm{d}\mathbf{b}}{\mathrm{d}s} = -\tau\mathbf{n}.
$$

The Frenet frame is orthonormal, and its evolution is completely determined by the curvature $\kappa$ and torsion $\tau$. Under an arbitrary parameter $\theta$, the Darboux vector $\boldsymbol{\Omega}$ satisfies $\mathbf{e}_{i,\theta} = \boldsymbol{\Omega}\times\mathbf{e}_i$.

**Orthonormal frames for surfaces**:

For a surface $\mathbf{r}(\theta^\alpha)$, an orthonormal frame $\{\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3\}$ satisfies $\mathbf{e}_\alpha\cdot\mathbf{e}_\beta = \delta_{\alpha\beta}$, with $\mathbf{e}_3 = \mathbf{e}_1\times\mathbf{e}_2$ as the normal. The Darboux frame on a surface combines the tangent vectors along principal directions with the normal. The covariant derivative of the moving frame is described by the Ricci rotation coefficients (also called spin coefficients):

$$
\mathbf{e}_{i,\alpha} = \boldsymbol{\omega}_\alpha\times\mathbf{e}_i,
$$

where $\boldsymbol{\omega}_\alpha$ are the Darboux vectors of the surface, encoding information about the Gaussian and mean curvatures.

### 5.2 Rod Kinematics in a Moving Frame

For a Cosserat rod $\{\mathbf{r}(\theta,t), \mathbf{d}_\alpha(\theta,t)\}$, we introduce the material frame $\mathbf{a}_i$ and the orthonormal moving frame $\mathbf{e}_i$. The two are related by an orthogonal transformation:

$$
\mathbf{e}_i = \mathbf{R}_i^{\,j}\mathbf{a}_j,\qquad \mathbf{R}_i^{\,j}\mathbf{R}_k^{\,i} = \delta_{kj}.
$$

**Darboux vector**: the variation of the frame along the rod axis is described by the Darboux vector $\boldsymbol{\Omega}$:

$$
\mathbf{e}_{i,\theta} = \boldsymbol{\Omega}\times\mathbf{e}_i,\qquad
\boldsymbol{\Omega} = \kappa_1\mathbf{e}_1 + \kappa_2\mathbf{e}_2 + \tau\mathbf{e}_3,
$$

where $\kappa_1,\kappa_2$ are the two bending components and $\tau$ is the twist component. For the Frenet frame: $\kappa_1=\kappa$, $\kappa_2=0$, and $\tau$ is the torsion.

**Projection of strain measures onto the moving frame**:

The deformation gradient $\gamma_{ij}$ and $\sigma_{\alpha i}$ are projected onto $\mathbf{e}_i$. Rod extension and shear:

$$
\gamma_{ij}^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{a}_k\,\gamma^{kl}\,\mathbf{a}_l\cdot\mathbf{e}_j,
$$

Bending and twist strain are expressed as the difference between $\boldsymbol{\Omega}$ and its reference value:

$$
\boldsymbol{\kappa} = \boldsymbol{\Omega} - \boldsymbol{\Omega}_0,\qquad
\boldsymbol{\Omega}_0 = \kappa_{01}\mathbf{e}_1 + \kappa_{02}\mathbf{e}_2 + \tau_0\mathbf{e}_3.
$$

The transformation between moving frame strain measures and $\gamma_{ij},\sigma_{\alpha i}$ is:

$$
2\gamma_{ij}^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{a}_k(\gamma_{kl}+A_{kl})\mathbf{a}_l\cdot\mathbf{e}_j - \delta_{ij},
$$

$$
\sigma_{\alpha i}^{\mathrm{e}} = \mathbf{e}_i\cdot(\kappa_{\alpha k}\mathbf{a}^k) - \mathbf{e}_i\cdot(K_{\alpha k}\mathbf{a}^k).
$$

**Velocity decomposition**: in the moving frame, $\mathbf{v} = v^i\mathbf{e}_i$, $\mathbf{w}_\alpha = w_{\alpha}^i\mathbf{e}_i$, where $v^i,w_\alpha^i$ are scalar components.

### 5.3 Shell Kinematics in a Moving Frame

For a Cosserat shell $\{\mathbf{r}(\theta^\alpha,t), \mathbf{d}(\theta^\alpha,t)\}$, we introduce the orthonormal basis $\{\mathbf{e}_\alpha,\mathbf{e}_3\}$, satisfying $\mathbf{e}_\alpha\cdot\mathbf{e}_\beta = \delta_{\alpha\beta}$, $\mathbf{e}_3 = \mathbf{n}$ as the normal.

**Surface Darboux frame**: the variation of the frame along surface coordinates is described by Darboux vectors $\boldsymbol{\omega}_\alpha$:

$$
\mathbf{e}_{i,\alpha} = \boldsymbol{\omega}_\alpha\times\mathbf{e}_i,\qquad
\boldsymbol{\omega}_\alpha = a_{\alpha j}\mathbf{e}^j.
$$

where $a_{\alpha j}$ are the surface geometric coefficients, related to $b_{\alpha\beta}$ and rotation coefficients.

**Orthogonal components of strain measures**:

In-plane strain:

$$
e_{\alpha\beta}^{\mathrm{e}} = \tfrac12(\mathbf{e}_\alpha\cdot\mathbf{a}_\gamma\,a^{\gamma\delta}\,\mathbf{a}_\delta\cdot\mathbf{e}_\beta - \delta_{\alpha\beta}),
$$

Bending-shear strain (director gradient):

$$
\kappa_{i\alpha}^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{d}_{,\alpha} - \mathbf{e}_i\cdot\mathbf{D}_{,\alpha},
$$

Director displacement:

$$
\delta_i^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{d} - \mathbf{e}_i\cdot\mathbf{D}.
$$

**Cosserat director decomposition**: in the orthonormal frame, $\mathbf{d} = d^i\mathbf{e}_i$. The normal component $d^3$ describes thickness stretch, while the tangential components $d^\alpha$ describe transverse shear.

### 5.4 Integral Energy Balance in the Moving Frame

In the moving frame, the energy balance has the same form as in convected coordinates (frame invariance), but the component representation differs.

**Rod energy balance** (moving frame components):

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2}\rho\Bigl(U + \tfrac12 v^iv_i + \tfrac12 y^{\alpha\beta}w_{\alpha}^i w_{\beta i}\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
= \int_{\theta_1}^{\theta_2}\rho\bigl(r + f^i v_i + l^{\alpha i}w_{\alpha i}\bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[n^i v_i + p^{\alpha i}w_{\alpha i} - h\Bigr]_{\theta_1}^{\theta_2}.
\tag{5.1}
$$

where $v_i = v^i$ (Cartesian index raising/lowering is trivial), $n^i = \mathbf{n}\cdot\mathbf{e}^i$, $p^{\alpha i} = \mathbf{p}^\alpha\cdot\mathbf{e}^i$.

**Shell energy balance** (moving frame components):

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma\bigl(\tfrac12\rho v^iv_i + \rho U\bigr)\,\mathrm{d}\sigma
= \int_\sigma\rho\bigl(r + F^i v_i + L^i w_i\bigr)\,\mathrm{d}\sigma
+ \int_{\mathcal{C}}\bigl(N^i v_i + M^i w_i - h\bigr)\,\mathrm{d}c.
\tag{5.2}
$$

where $w_i = \mathbf{w}\cdot\mathbf{e}_i$, $N^i = \mathbf{N}\cdot\mathbf{e}^i$, $M^i = \mathbf{M}\cdot\mathbf{e}^i$.

### 5.5 Invariance under Superposed Rigid Motion in the Moving Frame

**Translational invariance**: identical to the convected coordinate case. Superpose $\mathbf{v}\to\mathbf{v}+\mathbf{b}$, $\mathbf{w}_\alpha\to\mathbf{w}_\alpha$. The moving frame $\mathbf{e}_i$ is invariant under translation. This yields the component forms of mass conservation (3.2) and the linear momentum equation (3.3):

$$
n^i_{,\theta} + \rho f^i = \rho\dot{v}^i\quad\text{(rod)},\qquad
N^{\alpha i}_{|\alpha} + \rho F^i = \rho\dot{v}^i\quad\text{(shell)}.
\tag{5.3}
$$

**Rotational invariance**: superpose a rigid angular velocity $\boldsymbol{\omega}$. Unlike the convected coordinate case, the moving frame itself undergoes rotation:

$$
\mathbf{e}_i^* = \mathbf{Q}\mathbf{e}_i,\qquad \dot{\mathbf{Q}} = \boldsymbol{\Omega}_0\mathbf{Q},
$$

where $\boldsymbol{\Omega}_0$ is the superposed rigid rotation tensor. The Darboux vectors transform as:

$$
\boldsymbol{\Omega}^* = \boldsymbol{\Omega} + \boldsymbol{\omega},\qquad
\boldsymbol{\omega}_\alpha^* = \boldsymbol{\omega}_\alpha + \boldsymbol{\omega}_{,\alpha}.
$$

Velocity transformation rules:

$$
\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha + \boldsymbol{\omega}\times\mathbf{d}_\alpha.
$$

Substituting the transformed quantities into the energy balance (5.1) or (5.2), and using the arbitrariness of $\boldsymbol{\omega}$, yields the angular momentum equation in the moving frame.

**Rod angular momentum equation**:

$$
\mathbf{m}_{,\theta} + \mathbf{a}_3\times\mathbf{n} + \rho\mathbf{g} = \mathbf{0},
$$

Component form:

$$
\varepsilon_{ijk}\bigl(m^j_{,\theta}\mathbf{e}^k + a_3^j n^k + \rho g^j\mathbf{e}^k\bigr) = 0.
\tag{5.4}
$$

**Shell angular momentum equation**:

$$
\mathbf{N}^\alpha\times\mathbf{e}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{|\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = 0.
\tag{5.5}
$$

The key distinction here is that the moving frame's own rotation introduces transformation terms for $\boldsymbol{\Omega}$, but the final angular momentum equation has the same form as in convected coordinates (physical laws are frame-independent).

### 5.6 Reduced Energy Equation and Clausius–Duhem Inequality

After eliminating the kinetic energy terms using the linear momentum equation, the reduced energy equation in the moving frame takes the form:

**Rod**:

$$
-\rho\dot{U} + \rho r + \bigl(\pi^{(\alpha\beta)} - \cdots\bigr)\eta_{\alpha\beta}^{\mathrm{e}} + \frac{2}{\sqrt{a_{33}}}(n^\beta - \cdots)\eta_{\beta3}^{\mathrm{e}}
+ \frac{1}{\sqrt{a_{33}}}(n^3 - \cdots)\eta_{33}^{\mathrm{e}}
+ \frac{1}{\sqrt{a_{33}}}p^{\alpha i}\dot{\kappa}_{\alpha i}^{\mathrm{e}}
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{5.6}
$$

where $\eta_{ij}^{\mathrm{e}}$ are the deformation rate components in the $\mathbf{e}_i$ frame, and $\dot{\kappa}_{\alpha i}^{\mathrm{e}}$ are the frame gradient rate components. All mechanical power terms are now expressed in moving frame components.

**Shell**:

$$
\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta}^{\mathrm{e}} + m^i\dot{d}_i^{\mathrm{e}} + M^{i\alpha}\dot{\lambda}_{i\alpha}^{\mathrm{e}} = 0.
\tag{5.7}
$$

**Clausius–Duhem inequality** in the moving frame is frame-independent and retains its form:

$$
\rho T\dot{S} - \rho r + q^\alpha_{|\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{5.8}
$$

### 5.7 Elastic Constitutive Equations in the Moving Frame

In the moving frame, the free energy function takes the form of strain invariants. For isotropic materials, the invariants simplify considerably in an orthonormal frame.

**Rod isotropic free energy**:

$$
A = A(T, I_1, I_2, I_3, J_1, J_2, J_3),
$$

where $I_i$ are invariants of $\gamma_{ij}^{\mathrm{e}}$ and $J_i$ are invariants of $\sigma_{\alpha i}^{\mathrm{e}}$. In the orthonormal frame, these invariants reduce to simpler forms. For example, for a transversely isotropic rod (along $\mathbf{e}_3$):

$$
I_1 = \gamma_{33}^{\mathrm{e}},\quad I_2 = \gamma_{13}^{\mathrm{e}}\gamma_{13}^{\mathrm{e}} + \gamma_{23}^{\mathrm{e}}\gamma_{23}^{\mathrm{e}},\quad I_3 = \gamma_{11}^{\mathrm{e}}\gamma_{22}^{\mathrm{e}} - (\gamma_{12}^{\mathrm{e}})^2,
$$

$$
J_1 = \kappa_{13}^{\mathrm{e}},\quad J_2 = \kappa_{23}^{\mathrm{e}},\quad J_3 = \kappa_{12}^{\mathrm{e}} - \kappa_{21}^{\mathrm{e}}.
$$

Constitutive equations:

$$
n^i = \rho\frac{\partial A}{\partial\gamma_{i3}^{\mathrm{e}}},\qquad
p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}^{\mathrm{e}}},\qquad
\pi^{\alpha\beta} = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}^{\mathrm{e}}}.
\tag{5.9}
$$

**Shell isotropic free energy**:

In the orthonormal surface frame, the number of joint invariants reduces from the general 24 to:

$$
A = A(T, I_1, I_2, I_3, I_4, I_5, I_6),
$$

where $I_1 = e_{\alpha}^{\alpha}$ (mean in-plane strain), $I_2 = e_{\beta}^{\alpha}e_{\alpha}^{\beta}$ (in-plane shear), $I_3 = \det(e_{\alpha\beta})$, $I_4 = \kappa_{\alpha}^{\alpha}$ (mean bending), $I_5 = \kappa_{\beta}^{\alpha}\kappa_{\alpha}^{\beta}$ (bending intensity), $I_6 = \delta^i\delta_i$ (director deformation).

Constitutive equations:

$$
N'^{\alpha\beta} = \rho\frac{\partial A}{\partial e_{\alpha\beta}},\qquad
M^{i\alpha} = \rho\frac{\partial A}{\partial\kappa_{i\alpha}},\qquad
m^i = \rho\frac{\partial A}{\partial\delta_i}.
\tag{5.10}
$$

### 5.8 Special Cases

**Euler elastica in the Frenet frame**:

Using the Frenet frame $\{\mathbf{t},\mathbf{n},\mathbf{b}\}$, the Darboux vector is $\boldsymbol{\Omega} = \tau\mathbf{t} + \kappa\mathbf{b}$. For an inextensible Kirchhoff rod, the free energy $A = A(T, \kappa, \tau)$. In the linear elastic case:

$$
A = \tfrac12 EI(\kappa-\kappa_0)^2 + \tfrac12 GJ(\tau-\tau_0)^2.
$$

Couple constitutive relations: $m_b = EI(\kappa-\kappa_0)$ (bending couple), $m_t = GJ(\tau-\tau_0)$ (twisting couple). The equilibrium equations decompose into three scalar equations in the Frenet frame, which is the classical Kirchhoff kinetic analogy.

**Kirchhoff–Love shell in an orthonormal frame**:

Using the principal direction orthonormal frame $\{\mathbf{e}_1,\mathbf{e}_2,\mathbf{n}\}$, where $\mathbf{e}_\alpha$ are along the principal curvature directions. In this frame, $b_{\alpha\beta} = \kappa_\alpha\delta_{\alpha\beta}$ ($\kappa_\alpha$ are the principal curvatures), and the constitutive relations simplify considerably.

Strain energy density:

$$
A = \tfrac12 D^{\alpha\beta\gamma\delta} e_{\alpha\beta} e_{\gamma\delta} + \tfrac12 B^{\alpha\beta\gamma\delta} \kappa_{\alpha\beta} \kappa_{\gamma\delta},
$$

where $D$ is the membrane stiffness and $B$ is the bending stiffness. In the principal direction frame:

$$
D^{\alpha\beta\gamma\delta} = \frac{Eh}{1-\nu^2}\bigl[(1-\nu)\delta^{\alpha\gamma}\delta^{\beta\delta} + \nu\delta^{\alpha\beta}\delta^{\gamma\delta}\bigr],
$$

$$
B^{\alpha\beta\gamma\delta} = \frac{Eh^3}{12(1-\nu^2)}\bigl[(1-\nu)\delta^{\alpha\gamma}\delta^{\beta\delta} + \nu\delta^{\alpha\beta}\delta^{\gamma\delta}\bigr].
$$

**Cosserat rod Timoshenko beam equations in the moving frame**:

Using the frame $\{\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3\}$, where $\mathbf{e}_3$ follows the rod axis and $\mathbf{e}_1,\mathbf{e}_2$ are the principal directions of the cross-section. The constitutive relations decouple in the orthonormal frame:

$$
n_1 = k_5\gamma_{13},\quad n_2 = k_6\gamma_{23},\quad n_3 = k_3\gamma_{33},
$$

$$
m_1 = k_{15}\kappa_{23},\quad m_2 = -k_{16}\kappa_{13},\quad m_3 = \tfrac12\mu J(\kappa_{12}-\kappa_{21}).
$$

Timoshenko beam governing equations in the moving frame:

$$
\frac{\partial}{\partial\xi}\Bigl[k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr)\Bigr] + \rho f_2 = \rho\ddot{u}_2,
$$

$$
\frac{\partial}{\partial\xi}\Bigl[k_{15}\frac{\partial\bar{\delta}_{23}}{\partial\xi}\Bigr] - k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr) + \rho\hat{q}_{23} = 0.
$$

These equations have the same form as (4.10), with the distinction that the shear correction factors in $k_5,k_{15}$ can be directly identified from 3D elasticity in the orthonormal frame.

> **Summary 5.1**
>
> - The orthonormality of the moving frame $\{\mathbf{e}_i\}$ simplifies the expression of constitutive relations
> - The Darboux vector $\boldsymbol{\Omega}$ encodes the local geometry of the curve/surface
> - Translational invariance in the moving frame is identical to the convected case; rotational invariance requires handling the frame's own rotation
> - Strain invariants for isotropic materials reduce in number and simplify in form in an orthonormal frame
> - The Frenet frame yields the $\kappa$-$\tau$ form of the Euler elastica; the orthonormal surface frame decouples membrane and bending stiffnesses

---

## Part VI — Comparison of Cosserat Theory and Ciarlet's Differential Geometry Shell Theory

### 6.1 Overview of Ciarlet's Shell Theory

Ciarlet's shell theory ([Ciarlet 2000, 2005]) starts from **three-dimensional elasticity** and uses the **asymptotic expansion method** with thickness as the small parameter for dimensional reduction, rather than introducing an independent director. The core framework is built on classical differential geometry:

**Coordinate system**: the shell mid-surface is described by an embedding $\boldsymbol{\theta}(\omega)$ in $\mathbb{E}^3$, $\omega \subset \mathbb{R}^2$. The three-dimensional region is:

$$
\Omega^\varepsilon = \{\boldsymbol{\Theta}(\theta^\alpha, \xi) = \boldsymbol{\theta}(\theta^\alpha) + \xi\mathbf{a}_3(\theta^\alpha) : (\theta^\alpha) \in \omega,\; |\xi| < \varepsilon\},
$$

where $\varepsilon$ is the half-thickness and $\mathbf{a}_3$ is the unit normal to the surface.

**Scaling**: the thickness coordinate is scaled as $x_3 = \xi/\varepsilon$, mapping the problem to a fixed-thickness domain $\Omega = \omega \times (-1,1)$. On $\Omega$, the displacement $\mathbf{u}^\varepsilon$ is expanded asymptotically:

$$
\mathbf{u}^\varepsilon(\theta^\alpha, x_3) = \mathbf{u}^{(0)}(\theta^\alpha, x_3) + \varepsilon\mathbf{u}^{(1)}(\theta^\alpha, x_3) + \varepsilon^2\mathbf{u}^{(2)}(\theta^\alpha, x_3) + \cdots.
$$

**Lowest order (membrane theory)**: the $O(1)$ term yields the membrane equations, containing only in-plane stiffness with no bending stiffness.

**Next order (Koiter theory)**: the $O(\varepsilon^2)$ term yields the Koiter shell equations, including both membrane and bending stiffness.

### 6.2 Comparison of Strain Measures

**Ciarlet/Koiter strain measures**: defined entirely by changes in the first and second fundamental forms of the surface.

Linearized change of metric tensor (in-plane strain):

$$
\gamma_{\alpha\beta}(\boldsymbol{\eta}) = \tfrac12(a_{\alpha\beta}(\boldsymbol{\theta}+\boldsymbol{\eta}) - a_{\alpha\beta}(\boldsymbol{\theta})) \approx \tfrac12(\eta_{\alpha|\beta} + \eta_{\beta|\alpha}) - b_{\alpha\beta}\eta_3.
$$

Linearized change of curvature tensor (bending strain):

$$
\rho_{\alpha\beta}(\boldsymbol{\eta}) = b_{\alpha\beta}(\boldsymbol{\theta}+\boldsymbol{\eta}) - b_{\alpha\beta}(\boldsymbol{\theta}) \approx \eta_{3|\alpha\beta} - \Gamma^\gamma_{\alpha\beta}\eta_{3|\gamma} - b^\gamma_\alpha b_{\gamma\beta}\eta_3 + b^\gamma_\alpha\eta_{\gamma|\beta} + b^\gamma_\beta\eta_{\gamma|\alpha} + b^\gamma_{\alpha|\beta}\eta_\gamma.
\tag{6.1}
$$

**Cosserat strain measures** (restated for comparison):

$$
e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta}),\qquad
\kappa_{i\alpha} = \lambda_{i\alpha} - \Lambda_{i\alpha},\qquad
\delta_i = d_i - D_i.
\tag{6.2}
$$

**Key differences**:

- Cosserat's $\kappa_{i\alpha}$ includes the variation of the director gradient along the surface (containing transverse shear information); Ciarlet's $\rho_{\alpha\beta}$ contains only second derivatives of the normal displacement (classical Kirchhoff–Love assumption).
- Cosserat's $\delta_i$ describes director stretch and shear, with no counterpart in Ciarlet's theory (the normal is assumed to remain straight and perpendicular to the mid-surface).
- When the Cosserat shell is strongly constrained by $\mathbf{d} = \mathbf{a}_3$ (inextensible, unshearable), $\kappa_{\alpha\beta}$ reduces to the change in $b_{\alpha\beta}$, i.e., $\rho_{\alpha\beta}$.

### 6.3 Energy and Variational Framework Comparison

**Ciarlet/Koiter energy**:

$$
I(\boldsymbol{\eta}) = \frac12\int_\omega \Bigl[ \varepsilon a^{\alpha\beta\gamma\delta}\gamma_{\alpha\beta}(\boldsymbol{\eta})\gamma_{\gamma\delta}(\boldsymbol{\eta}) + \frac{\varepsilon^3}{3} a^{\alpha\beta\gamma\delta}\rho_{\alpha\beta}(\boldsymbol{\eta})\rho_{\gamma\delta}(\boldsymbol{\eta}) \Bigr]\,\mathrm{d}\omega - \ell(\boldsymbol{\eta}),
\tag{6.3}
$$

where $a^{\alpha\beta\gamma\delta} = \frac{4\lambda\mu}{\lambda+2\mu}a^{\alpha\beta}a^{\gamma\delta} + 2\mu(a^{\alpha\gamma}a^{\beta\delta}+a^{\alpha\delta}a^{\beta\gamma})$ is the 2D elasticity tensor, and $\lambda,\mu$ are the Lamé constants. This energy is coercive on $H^1(\omega) \times H^1(\omega) \times H^2(\omega)$, relying on a **Korn inequality generalized to surfaces**.

**Cosserat shell energy**:

$$
I(\mathbf{r}, \mathbf{d}) = \int_\sigma \rho A(T, e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i)\,\mathrm{d}\sigma - (\text{external work}),
$$

where $A$ can be any nonlinear function. There is no general coercivity guarantee (must be verified case by case through constitutive assumptions).

### 6.4 Asymptotic Analysis and $\Gamma$-Convergence

The core result of Ciarlet's method: as the thickness $\varepsilon \to 0$, the solution of the 3D elasticity problem converges in an appropriate sense to the solution of the 2D shell model.

$$
\frac{1}{2\varepsilon}\int_{\Omega^\varepsilon} W(\nabla\mathbf{u}^\varepsilon)\,\mathrm{d}V \xrightarrow{\Gamma} I_{\text{Koiter}}(\boldsymbol{\eta}) \quad\text{or}\quad I_{\text{membrane}}(\boldsymbol{\eta}),
$$

depending on the scaling of external forces and boundary conditions. This $\Gamma$-convergence result establishes a rigorous mathematical connection between 3D elasticity and 2D shell theory.

**Connection to Cosserat theory**: in the limiting case of vanishing thickness:

- Constrained Cosserat shell ($\mathbf{d} = \mathbf{a}_3$) $\Gamma$-converges to the Koiter shell energy
- Unconstrained Cosserat shell $\Gamma$-converges to a Reissner–Mindlin-type energy including transverse shear
- Cosserat models with interface energy ($\mu_c = \infty$) reduce to second-gradient models

### 6.5 Theory Comparison Summary

| Aspect                      | Cosserat Shell Theory                                                              | Ciarlet/Koiter Shell Theory                                          |
| --------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Starting point**    | Direct assumption of 2D continuum + director; or truncation of 3D series expansion | 3D elasticity + asymptotic expansion + $\Gamma$-convergence         |
| **Kinematic variables**| $\mathbf{r}(\theta^\alpha), \mathbf{d}(\theta^\alpha)$ (6 independent DOF)       | $\boldsymbol{\eta}(\theta^\alpha)$ (3 displacement components)     |
| **Normal assumption**  | None (director can stretch and rotate)                                             | Kirchhoff–Love (normal remains straight and perpendicular)           |
| **Transverse shear**   | Naturally included                                                                | Neglected in Koiter; introduced via independent rotation in Naghdi    |
| **Thickness stretch**  | Naturally included ($\delta_3 \neq 0$)                                            | Neglected                                                            |
| **Strain measures**    | $e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i$ (based on director gradient)       | $\gamma_{\alpha\beta}, \rho_{\alpha\beta}$ (based on fundamental form changes) |
| **Constitutive source**| Free parameters (or 3D integral identification)                                    | Directly from 3D Lamé constants + cross-sectional geometry          |
| **Mathematical basis** | Thermodynamics + invariance principles                                             | Functional analysis + Korn inequality + $\Gamma$-convergence       |
| **Existence theory**   | No general guarantee                                                               | Koiter model coercive on $H^1\times H^1\times H^2$                |
| **Applicable thickness** | Thin to moderate (may include cross-sectional deformation)                       | Thin shells ($\varepsilon \ll 1$)                                  |
| **Nonlinearity**       | Naturally includes finite deformation                                              | Finite deformation requires special treatment (Ciarlet 2000, Part C) |
| **Shear correction**   | Naturally determined from 3D (e.g., F1 mode $\kappa = 6(1+\nu)^2/(7+14\nu+8\nu^2)$) | Must be introduced ad hoc (Reissner–Mindlin type)                     |
| **Numerical methods**  | Cosserat point (Rubin 2001), no shear locking                                      | Standard FEM + shear locking treatment needed                        |

### 6.6 Bridging: Cosserat → Ciarlet

When the Cosserat shell director is constrained to be the unit normal without transverse shear, the two theories unify. Set:

$$
\mathbf{d} = \mathbf{a}_3 = \text{unit normal},\qquad \delta_i = 0.
$$

Then the Cosserat strain measures reduce to:

$$
e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta}) \equiv \gamma_{\alpha\beta},\qquad
\kappa_{\alpha\beta} = b_{\alpha\beta} - B_{\alpha\beta} \equiv \rho_{\alpha\beta}.
$$

The free energy reduces to the Koiter form. **Conclusion**: the Kirchhoff–Love shell is a special case of the constrained Cosserat shell, and the Koiter shell is a mathematically rigorous version of the Kirchhoff–Love shell (Ciarlet 2000, Steigmann 1999).

Conversely, when Ciarlet's theory introduces an independent rotation field (as in the Naghdi shell model), the two theories are kinematically equivalent, differing only in the derivation route (direct method vs. asymptotic method) and the identification of constitutive coefficients.

> **Summary 6.1**
>
> - Ciarlet's theory starts from 3D elasticity and obtains 2D shell equations via asymptotic expansion; Cosserat theory starts from 2D integral balance laws
> - Ciarlet uses $\gamma_{\alpha\beta}, \rho_{\alpha\beta}$ (changes in fundamental forms) as strain measures; Cosserat uses $e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i$ (director deformation)
> - The constrained Cosserat shell ($\mathbf{d}=\mathbf{a}_3$) reduces to the Kirchhoff–Love shell, with energy equivalent to the Koiter model
> - Ciarlet provides rigorous existence and $\Gamma$-convergence theory; Cosserat provides broader physical applicability
> - The two approaches are complementary: Ciarlet's method provides mathematical rigor and coefficient identification, while Cosserat's method provides physical generality and a natural description of shear and thickness deformation

---

## Appendix — Complete Derivation Chain from the First Law of Thermodynamics

This appendix presents the complete derivation chain starting from the **integral form of the first law of thermodynamics**, proceeding through **invariance under superposed rigid-body motions**, to obtain the full set of equations for rod and shell theories. No intermediate steps are omitted.

### A.1 Notation and Conventions

| Symbol                                           | Meaning                       | Type      |
| ------------------------------------------------ | ----------------------------- | --------- |
| $\mathbf{r}$                                   | Position vector               | Kinematic |
| $\mathbf{a}_i$                                 | Convected basis vectors       | Kinematic |
| $\mathbf{v} = \dot{\mathbf{r}}$                | Velocity                      | Kinematic |
| $\mathbf{w}_\alpha$ (rod) / $\mathbf{w}$ (shell)| Director velocity             | Kinematic |
| $\rho$                                         | Mass density (per length/area)| Mass      |
| $U$                                            | Internal energy per unit mass | Thermodynamic |
| $S$                                            | Entropy per unit mass         | Thermodynamic |
| $T > 0$                                        | Temperature                   | Thermodynamic |
| $A = U - TS$                                   | Helmholtz free energy         | Thermodynamic |
| $r$                                            | Heat supply per unit mass     | Thermodynamic |
| $h$                                            | Boundary heat flux            | Thermodynamic |
| $\mathbf{f},\mathbf{F}$                        | Body force                    | Mechanical |
| $\mathbf{l}^\alpha,\mathbf{L}$                 | Director force                | Mechanical |
| $\mathbf{n},\mathbf{N}^\alpha$                 | Stress resultant              | Mechanical |
| $\mathbf{p}^\alpha,\mathbf{M}^\alpha$          | Director stress resultant     | Mechanical |
| $y^{\alpha\beta}$                              | Director inertia coefficients | Mechanical |

### A.2 Rod Derivation Chain

#### A.2.1 Step 1: Integral Form of Energy Balance

For any rod segment $[\theta_1,\theta_2]$:

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2} \rho\Bigl(U + \tfrac12\mathbf{v}\cdot\mathbf{v} + \tfrac12 y^{\alpha\beta}\mathbf{w}_\alpha\cdot\mathbf{w}_\beta\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
= \int_{\theta_1}^{\theta_2} \rho\bigl(r + \mathbf{f}\cdot\mathbf{v} + \mathbf{l}^\alpha\cdot\mathbf{w}_\alpha\bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\mathbf{n}\cdot\mathbf{v} + \mathbf{p}^\alpha\cdot\mathbf{w}_\alpha - h\Bigr]_{\theta_1}^{\theta_2}.
\tag{A.1}
$$

This is the starting point for all subsequent derivations.

#### A.2.2 Step 2: Superposed Rigid Translation

Consider superposing a uniform rigid-body translational velocity $\mathbf{b}$ (an arbitrary constant vector independent of $\theta$). In the new motion:

$$
\mathbf{v}^* = \mathbf{v} + \mathbf{b},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha,\qquad
\mathbf{n}^* = \mathbf{n},\qquad
\mathbf{p}^{\alpha*} = \mathbf{p}^\alpha,\qquad
h^* = h.
$$

Basic assumption: $\rho$, $U$, $r$, $h$, $\mathbf{f}-\dot{\mathbf{v}}$, $\mathbf{l}^\alpha$, $\mathbf{n}$, $\mathbf{p}^\alpha$, $y^{\alpha\beta}$ and $\mathbf{w}_\alpha$ remain unchanged under superposed uniform rigid translation.

Substituting the translation transformation into (A.1) and subtracting the original equation gives:

$$
\begin{aligned}
\mathbf{b}\cdot &\Bigl\{\int_{\theta_1}^{\theta_2}\rho(\dot{\mathbf{v}}-\mathbf{f})\sqrt{a_{33}}\,\mathrm{d}\theta - \bigl[\mathbf{n}\bigr]_{\theta_1}^{\theta_2}
+ \int_{\theta_1}^{\theta_2}\mathbf{v}\bigl[\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}}\bigr]\sqrt{a_{33}}\,\mathrm{d}\theta\Bigr\} \\
&+ \frac12(\mathbf{b}\cdot\mathbf{b})\int_{\theta_1}^{\theta_2}\bigl[\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}}\bigr]\sqrt{a_{33}}\,\mathrm{d}\theta = 0.
\end{aligned}
\tag{A.2}
$$

#### A.2.3 Step 3: Mass Conservation

Since (A.2) holds for arbitrary $\mathbf{b}$, by setting $\mathbf{b}\to\beta\mathbf{b}$ and varying $\beta$, we separate the $\mathbf{b}\cdot\mathbf{b}$ term. First obtain:

$$
\int_{\theta_1}^{\theta_2}\bigl[\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}}\bigr]\sqrt{a_{33}}\,\mathrm{d}\theta = 0\quad\forall[\theta_1,\theta_2].
$$

Localization (integral zero for arbitrary intervals → integrand zero):

$$
\boxed{\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}} = 0}\quad\Longleftrightarrow\quad \frac{\mathrm{D}}{\mathrm{D}t}(\rho\sqrt{a_{33}})=0.
\tag{A.3}
$$

This is the **mass conservation equation** for a Cosserat rod.

#### A.2.4 Step 4: Linear Momentum Equation

Using (A.3) to simplify the $\mathbf{b}$ coefficient in (A.2), we obtain the integral form of the linear momentum equation:

$$
\int_{\theta_1}^{\theta_2}\rho(\dot{\mathbf{v}}-\mathbf{f})\sqrt{a_{33}}\,\mathrm{d}\theta - \bigl[\mathbf{n}\bigr]_{\theta_1}^{\theta_2} = 0.
\tag{A.4}
$$

Using the Newton–Leibniz formula $[\mathbf{n}]_{\theta_1}^{\theta_2} = \int_{\theta_1}^{\theta_2}\frac{\partial\mathbf{n}}{\partial\theta}\,\mathrm{d}\theta$ and merging the integrals:

$$
\int_{\theta_1}^{\theta_2}\Bigl(\rho\dot{\mathbf{v}} - \rho\mathbf{f} - \frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{n}}{\partial\theta}\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta = 0.
$$

Localization gives the **differential form of the linear momentum equation**:

$$
\boxed{\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{n}}{\partial\theta} + \rho\mathbf{f} = \rho\dot{\mathbf{v}}}.
\tag{A.5}
$$

#### A.2.5 Step 5: Superposed Rigid Rotation

Consider superposing a uniform rigid angular velocity $\boldsymbol{\omega}$ (independent of $\theta$). In the new motion, quantities are evaluated at the same placement.

**Transformation of kinematic quantities**:

$$
\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha + \boldsymbol{\omega}\times\mathbf{d}_\alpha,
$$

$$
\eta_{ki}^* = \eta_{ki},\qquad
\psi_{ki}^* = \psi_{ki} - \Omega_{ki},
$$

where $\Omega_{ki} = \varepsilon_{kim}\omega^m$, $\eta_{ki} = c_{(ki)}$, $\psi_{ki}=c_{[ki]}$.

**Invariance assumption**: $\rho$, $r$, $U$, $\mathbf{n}$, $\mathbf{p}^\alpha$, $\mathbf{q}^\alpha \equiv \mathbf{l}^\alpha - \tfrac12\dot{y}^{\alpha\beta}\mathbf{w}_\beta - y^{\alpha\beta}\ddot{\mathbf{w}}_\beta$ remain unchanged under superposed rigid rotation.

#### A.2.6 Step 6: Reduced Energy Equation (Before Rotational Invariance)

First, use mass conservation (A.3) and the linear momentum equation (A.5) to eliminate kinetic energy terms from the full energy balance (A.1). Expanding $\frac{\mathrm{D}}{\mathrm{D}t}$ in (A.1) and substituting (A.3) and (A.5) yields:

$$
-\rho\dot{U} + \rho r + \rho\mathbf{q}^\alpha\cdot\mathbf{w}_\alpha
+ \frac{1}{\sqrt{a_{33}}}\frac{\partial}{\partial\theta}(\mathbf{p}^\alpha\cdot\mathbf{w}_\alpha)
+ \frac{1}{\sqrt{a_{33}}}\mathbf{n}\cdot\frac{\partial\mathbf{v}}{\partial\theta}
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{A.6}
$$

This is the localized **differential form of the energy equation** (not yet reduced).

#### A.2.7 Step 7: Rotational Invariance → Angular Momentum Equation

Substituting the rotation transformation into (A.6) and using the arbitrariness of $\boldsymbol{\omega}$ yields two sets of conditions:

**(a) Angular momentum equation**:

$$
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{m}}{\partial\theta} + \frac{1}{\sqrt{a_{33}}}\mathbf{a}_3\times\mathbf{n} + \rho\dot{\mathbf{g}} = 0,
\tag{A.7}
$$

where $\mathbf{m} = \mathbf{a}_\alpha\times\mathbf{p}^\alpha$ (couple resultant) and $\dot{\mathbf{g}} = \mathbf{a}_\alpha\times\mathbf{q}^\alpha$ (body couple).

**(b) Symmetry conditions** (component form):

$$
\pi^{[\alpha\beta]} + \frac{1}{2\sqrt{a_{33}}}\bigl(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha} - p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}\bigr) = 0,
\tag{A.8}
$$

$$
\pi^{\beta3} + \frac{1}{\sqrt{a_{33}}}\bigl(p^{\alpha3}\kappa_\alpha^{\cdot\beta} - p^{\alpha\beta}\kappa_\alpha^{\cdot3}\bigr) - \frac{1}{\sqrt{a_{33}}}n^\beta = 0.
\tag{A.9}
$$

#### A.2.8 Step 8: Reduced Energy Equation (After Rotational Invariance)

Using (A.7)–(A.9) to further simplify (A.6), eliminating terms associated with the spin $\psi_{ki}$, we obtain the **reduced energy equation**:

$$
-\rho\dot{U} + \rho r + \eta_{k\alpha}\,\pi^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\bigl(\dot{\kappa}_{\alpha k} - \eta_{kj}\,\kappa_\alpha^{\cdot j}\bigr)\,\mathbf{p}^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\,\eta_{k3}\,\mathbf{n}\cdot\mathbf{a}^k
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{A.10}
$$

This is a purely thermodynamic energy equation free of kinetic energy terms.

#### A.2.9 Step 9: Clausius–Duhem Entropy Inequality

Integral form of the second law:

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2}\rho S\sqrt{a_{33}}\,\mathrm{d}\theta
- \int_{\theta_1}^{\theta_2}\frac{\rho r}{T}\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\frac{h}{T}\Bigr]_{\theta_1}^{\theta_2} \ge 0.
\tag{A.11}
$$

Using mass conservation (A.3) and localizing:

$$
\rho\dot{S}T - \rho r + \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta}
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\tag{A.12}
$$

Combining (A.12) with the reduced energy equation (A.10) to eliminate $\rho r - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta}$, and introducing $A = U - TS$:

$$
-\rho(\dot{A} + \dot{T}S) + \eta_{k\alpha}\,\pi^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\bigl(\dot{\kappa}_{\alpha k} - \eta_{kj}\,\kappa_\alpha^{\cdot j}\bigr)\,\mathbf{p}^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\,\eta_{k3}\,\mathbf{n}\cdot\mathbf{a}^k
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\tag{A.13}
$$

This is the **Clausius–Duhem inequality** for a Cosserat rod.

#### A.2.10 Step 10: Elastic Constitutive Equations

For an elastic rod, the Helmholtz free energy is a function of the strain measures:

$$
A = A(T, \gamma_{ij}, \sigma_{\alpha i}),\qquad
\gamma_{ij} = a_{ij}-A_{ij},\quad \sigma_{\alpha i} = \kappa_{\alpha i}-K_{\alpha i}.
$$

Time derivatives: $\dot{\gamma}_{ij} = 2\eta_{ij}$, $\dot{\sigma}_{\alpha i} = \dot{\kappa}_{\alpha i}$.

Substituting $\dot{A} = \frac{\partial A}{\partial T}\dot{T} + \frac{\partial A}{\partial\gamma_{ij}}(2\eta_{ij}) + \frac{\partial A}{\partial\sigma_{\alpha i}}\dot{\kappa}_{\alpha i}$ into (A.13):

$$
\begin{aligned}
&-\rho\Bigl(S+\frac{\partial A}{\partial T}\Bigr)\dot{T}
+ \Bigl[\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) - 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}}\Bigr]\eta_{\alpha\beta} \\
&+ \Bigl[\frac{2}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) - 2\rho\frac{\partial A}{\partial\gamma_{\beta3}}\Bigr]\eta_{\beta3}
+ \Bigl[\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) - 2\rho\frac{\partial A}{\partial\gamma_{33}}\Bigr]\eta_{33} \\
&+ \Bigl[\frac{1}{\sqrt{a_{33}}}p^{\alpha i} - \rho\frac{\partial A}{\partial\sigma_{\alpha i}}\Bigr]\dot{\kappa}_{\alpha i}
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\end{aligned}
\tag{A.14}
$$

Since $\{\dot{T},\eta_{\alpha\beta},\eta_{\beta3},\eta_{33},\dot{\kappa}_{\alpha i},\partial T/\partial\theta\}$ are mutually independent (for elastic materials under uniform temperature), inequality (A.14) requires each coefficient to vanish:

**Entropy state equation**:

$$
\boxed{S = -\frac{\partial A}{\partial T}}.
\tag{A.15}
$$

**Stress constitutive equations**:

$$
\boxed{\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) = 2\rho\frac{\partial A}{\partial\gamma_{33}}},
\tag{A.16}
$$

$$
\boxed{\frac{1}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) = \rho\frac{\partial A}{\partial\gamma_{\beta3}}},
\tag{A.17}
$$

$$
\boxed{\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}}},
\tag{A.18}
$$

$$
\boxed{\frac{1}{\sqrt{a_{33}}}p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}}}.
\tag{A.19}
$$

**Heat conduction inequality**:

$$
\boxed{-h\,\frac{\partial T}{\partial\theta} \ge 0}.
\tag{A.20}
$$

**Residual energy equation** (heat conduction equation):

$$
\rho r - \rho T\dot{S} - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{A.21}
$$

The system of equations (A.3), (A.5), (A.7) together with (A.15)–(A.21) constitutes the complete set of governing equations for a Cosserat rod.

### A.3 Shell Derivation Chain

#### A.3.1 Step 1: Integral Form of Energy Balance

For any region $\sigma$ on the surface with boundary $\mathcal{C}$:

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma\bigl(\tfrac12\rho\mathbf{v}\cdot\mathbf{v} + \rho U\bigr)\,\mathrm{d}\sigma
= \int_\sigma\rho\bigl(r + \mathbf{F}\cdot\mathbf{v} + \bar{\mathbf{L}}\cdot\mathbf{w}\bigr)\,\mathrm{d}\sigma
+ \int_{\mathcal{C}}\bigl(\mathbf{N}\cdot\mathbf{v} + \mathbf{M}\cdot\mathbf{w} - h\bigr)\,\mathrm{d}c.
\tag{A.22}
$$

Note that the shell kinetic energy contains only $\tfrac12\rho\mathbf{v}\cdot\mathbf{v}$ (no director kinetic energy term), which differs from the rod.

#### A.3.2 Step 2: Superposed Rigid Translation

Transformation: $\mathbf{v}^* = \mathbf{v} + \mathbf{b}$, $\mathbf{w}^* = \mathbf{w}$. Using the arbitrariness of $\mathbf{b}$.

First, expand $\frac{\mathrm{D}}{\mathrm{D}t}$ inside the area integral. The rate of change of the area element is:

$$
\frac{\mathrm{D}}{\mathrm{D}t}(\mathrm{d}\sigma) = (v^\alpha_{|\alpha} - b^\alpha_\alpha v_3)\,\mathrm{d}\sigma.
$$

Substituting and using the arbitrariness of $\mathbf{b}$:

**(a) Mass conservation**:

$$
\int_\sigma\bigl[\dot{\rho} + \rho(v^\alpha_{|\alpha} - b^\alpha_\alpha v_3)\bigr]\,\mathrm{d}\sigma = 0\quad\forall\sigma,
$$

Localization:

$$
\boxed{\frac{\mathrm{D}\rho}{\mathrm{D}t} + \rho(v^\alpha_{|\alpha} - b^\alpha_\alpha v_3) = 0}.
\tag{A.23}
$$

**(b) Integral linear momentum equation**:

$$
\int_\sigma\rho(\dot{\mathbf{v}} - \mathbf{F})\,\mathrm{d}\sigma - \int_{\mathcal{C}}\mathbf{N}\,\mathrm{d}c = 0.
\tag{A.24}
$$

#### A.3.3 Step 3: Differential Form of Linear Momentum Equation

Writing $\mathbf{N} = \mathbf{N}^\alpha\nu_\alpha$ ($\nu_\alpha$ is the outward normal on the boundary) and applying Stokes' theorem $\oint\mathbf{N}^\alpha\nu_\alpha\,\mathrm{d}c = \int_\sigma\mathbf{N}^\alpha_{|\alpha}\,\mathrm{d}\sigma$:

$$
\int_\sigma\bigl[\rho(\dot{\mathbf{v}} - \mathbf{F}) - \mathbf{N}^\alpha_{|\alpha}\bigr]\,\mathrm{d}\sigma = 0.
$$

Localization:

$$
\boxed{\mathbf{N}^\alpha_{|\alpha} + \rho\mathbf{F} = \rho\dot{\mathbf{v}}}.
\tag{A.25}
$$

Component form:

$$
N^{\beta\alpha}_{|\alpha} - b^\beta_\alpha N^{3\alpha} + \rho F^\beta = \rho c^\beta,\qquad
N^{3\alpha}_{|\alpha} + b_{\alpha\beta} N^{\beta\alpha} + \rho F^3 = \rho c^3.
\tag{A.26}
$$

#### A.3.4 Step 4: Superposed Rigid Rotation

Transformation: $\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r}$, $\mathbf{w}^* = \mathbf{w} + \boldsymbol{\omega}\times\mathbf{d}$.

Transformation of kinematic quantities:

$$
\eta_{ki}^* = \eta_{ki},\qquad \psi_{ki}^* = \psi_{ki} - \Omega_{ki},\qquad
\Omega_{ki} = \varepsilon_{kim}\omega^m.
$$

#### A.3.5 Step 5: Reduced Energy Equation (Before Rotational Invariance)

Using mass conservation (A.23) and the linear momentum equation (A.25) to eliminate kinetic energy terms from (A.22). After computation, the localized differential energy equation is:

$$
\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + \mathbf{m}\cdot\mathbf{w}
+ \mathbf{N}^\alpha\cdot\mathbf{v}_{,\alpha}
+ \mathbf{M}^\alpha\cdot\mathbf{w}_{,\alpha} = 0,
\tag{A.27}
$$

where $\mathbf{m} = \mathbf{M}^\alpha_{|\alpha} + \rho\bar{\mathbf{L}}$ is the combined director force, and $q^\alpha$ is the heat flux vector.

#### A.3.6 Step 6: Rotational Invariance → Angular Momentum Equation

Substituting the rotation transformation into (A.27) and using the arbitrariness of $\boldsymbol{\omega}$. First define the boundary residual:

$$
\bar{\mathbf{M}} = \mathbf{M} - \mathbf{M}^\alpha\nu_\alpha,\qquad
\overline{h} = h - q^\alpha\nu_\alpha.
$$

From the boundary condition we obtain the symmetry condition:

$$
\boxed{\mathbf{d}\times\bar{\mathbf{M}} = 0}.
\tag{A.28}
$$

From the field equation we obtain the angular momentum equation:

$$
\boxed{\mathbf{N}^\alpha\times\mathbf{a}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{|\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = 0}.
\tag{A.29}
$$

Component symmetry condition:

$$
\varepsilon_{\beta\alpha}[N^{\beta\alpha} + m^\beta d^\alpha + M^{\beta\gamma}\lambda_{\,.\gamma}^\alpha] = 0.
\tag{A.30}
$$

#### A.3.7 Step 7: Reduced Energy Equation

Using (A.28)–(A.30) to further simplify (A.27), we obtain the **reduced energy equation** (free of spin-related terms):

$$
\boxed{\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} = 0}.
\tag{A.31}
$$

where $N'^{\alpha\beta} = N^{\beta\alpha} - m^\alpha d^\beta - M^{\alpha\gamma}\lambda_{\,.\gamma}^\beta$ is the symmetric effective stress tensor.

#### A.3.8 Step 8: Clausius–Duhem Inequality

Integral form of the second law:

$$
\int_\sigma\rho\dot{S}\,\mathrm{d}\sigma - \int_\sigma\frac{\rho r}{T}\,\mathrm{d}\sigma + \int_{\mathcal{C}}\frac{h}{T}\,\mathrm{d}c \ge 0.
\tag{A.32}
$$

Using $\overline{h}=0$ (from the elastic constitutive assumption $h = q^\alpha\nu_\alpha$) and localizing:

$$
\rho T\dot{S} - \rho r + q^\alpha_{|\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{A.33}
$$

Combining (A.31) and (A.33), and introducing $A = U - TS$:

$$
-\rho(\dot{A} + \dot{T}S) + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{A.34}
$$

#### A.3.9 Step 9: Elastic Shell Constitutive Equations

For an elastic Cosserat shell:

$$
A = A(T, e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i).
$$

Relations: $\dot{e}_{\alpha\beta} = \eta_{\alpha\beta}$, $\dot{\kappa}_{i\alpha} = \dot{\lambda}_{i\alpha}$, $\dot{\delta}_i = \dot{d}_i$.

Substituting $\dot{A} = \frac{\partial A}{\partial T}\dot{T} + \frac{\partial A}{\partial e_{\alpha\beta}}\eta_{\alpha\beta} + \frac{\partial A}{\partial\kappa_{i\alpha}}\dot{\lambda}_{i\alpha} + \frac{\partial A}{\partial\delta_i}\dot{d}_i$ into (A.34):

$$
\begin{aligned}
&-\rho\Bigl(S+\frac{\partial A}{\partial T}\Bigr)\dot{T}
+ \Bigl(N'^{\beta\alpha} - \rho\frac{\partial A}{\partial e_{\alpha\beta}}\Bigr)\eta_{\alpha\beta} \\
&+ \Bigl(m^i - \rho\frac{\partial A}{\partial\delta_i}\Bigr)\dot{d}_i
+ \Bigl(M^{i\alpha} - \rho\frac{\partial A}{\partial\kappa_{i\alpha}}\Bigr)\dot{\lambda}_{i\alpha}
- \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\end{aligned}
\tag{A.35}
$$

Using the independence of $\{\dot{T},\eta_{\alpha\beta},\dot{d}_i,\dot{\lambda}_{i\alpha},\partial T/\partial\theta\}$:

**Entropy**:

$$
\boxed{S = -\frac{\partial A}{\partial T}}.
\tag{A.36}
$$

**Elastic constitutive relations**:

$$
\boxed{N'^{\beta\alpha} = \rho\frac{\partial A}{\partial e_{\alpha\beta}},\qquad
m^i = \rho\frac{\partial A}{\partial \delta_i},\qquad
M^{i\alpha} = \rho\frac{\partial A}{\partial \kappa_{i\alpha}}}.
\tag{A.37}
$$

**Heat conduction inequality**:

$$
\boxed{-q^\alpha T_{,\alpha} \ge 0}.
\tag{A.38}
$$

The system of equations (A.23), (A.25), (A.29), (A.36)–(A.38) constitutes the complete set of governing equations for a Cosserat shell.

### A.4 Comparison of Rod and Shell Derivation Chains

| Step                | Rod                                                                                        | Shell                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Integral energy bal | (A.1)                                                                                      | (A.22)                                                                                |
| Translation trans   | $\mathbf{v}\to\mathbf{v}+\mathbf{b}$, $\mathbf{w}_\alpha\to\mathbf{w}_\alpha$              | $\mathbf{v}\to\mathbf{v}+\mathbf{b}$, $\mathbf{w}\to\mathbf{w}$                       |
| Mass conservation   | (A.3):$\dot{\rho}+\rho\dot{a}_{33}/2a_{33}=0$                                              | (A.23): $\dot{\rho}+\rho(v^\alpha_{|\alpha} - b^\alpha_\alpha v_3) = 0$               |
| Linear momentum     | (A.5):$\mathbf{n}_{,\theta}/\sqrt{a_{33}}+\rho\mathbf{f}=\rho\dot{\mathbf{v}}$             | (A.25): $\mathbf{N}^\alpha_{|\alpha} + \rho\mathbf{F} = \rho\dot{\mathbf{v}}$         |
| Rotation transform  | Add $\boldsymbol{\omega}\times\mathbf{r}$, $\boldsymbol{\omega}\times\mathbf{d}_\alpha$    | Add $\boldsymbol{\omega}\times\mathbf{r}$, $\boldsymbol{\omega}\times\mathbf{d}$      |
| Angular momentum    | (A.7)                                                                                      | (A.29)                                                                                |
| Symmetry conditions | (A.8)–(A.9)                                                                               | (A.28), (A.30)                                                                        |
| Reduced energy eqn  | (A.10)                                                                                     | (A.31)                                                                                |
| Clausius–Duhem      | (A.13)                                                                                     | (A.34)                                                                                |
| Constitutive eqns   | (A.15)–(A.19)                                                                             | (A.36)–(A.37)                                                                         |
| Heat cond. ineq     | (A.20)                                                                                     | (A.38)                                                                                |
| Independent vars    | $T,\gamma_{ij},\sigma_{\alpha i}$                                                         | $T,e_{\alpha\beta},\kappa_{i\alpha},\delta_i$                                         |

---

## References

- Green, A. E. & Laws, N. (1966). A general theory of rods. *Proc. R. Soc. Lond. A*, 293, 145.
- Green, A. E., Laws, N. & Naghdi, P. M. (1968). Rods, plates and shells. *Proc. Camb. Phil. Soc.*, 64, 895.
- Green, A. E., Naghdi, P. M. & Wainwright, W. L. (1965). A general theory of a Cosserat surface. *Arch. Rational Mech. Anal.*, 20, 287.
- Green, A. E. & Naghdi, P. M. (1970). Non-isothermal theory of rods, plates and shells. *Int. J. Solids Structures*, 6, 209.
- Green, A. E. & Naghdi, P. M. (1979). On electromagnetic effects in the theory of shells and plates. *Q. Jl Mech. appl. Math.*, 32, 279.
- Green, A. E. & Naghdi, P. M. (1985). A thermomechanical theory of a Cosserat point with application to composite materials. *Q. Jl Mech. appl. Math.*, 38, 1.
- Green, A. E., Naghdi, P. M. & Wenner, M. L. (1974). On the theory of rods. I. Derivations from the three-dimensional equations. *Proc. R. Soc. Lond. A*, 337, 451.
- Green, A. E., Naghdi, P. M. & Wenner, M. L. (1974). On the theory of rods. II. Developments by direct approach. *Proc. R. Soc. Lond. A*, 337, 485.
- Kafadar, C. B. (1972). On the nonlinear theory of rods. *Int. J. Engng Sci.*, 10, 337.
- Laws, N. (1967). A simple dipolar curve. *Q. Jl Mech. appl. Math.*, 20, 515. **Note: this theory does not apply to 3D rod motion and is merely a 1D dipolar curve analysis.**
- Naghdi, P. M. & Rubin, M. B. (1984). Constrained theories of rods. *J. Elasticity*, 14, 343.
- Naghdi, P. M. & Rubin, M. B. (1989). On the significance of normal cross-sectional extension in beam theory with application to contact problems. *Int. J. Solids Structures*, 25, 249.
- Rubin, M. B. (2001). Numerical solution procedures for nonlinear elastic rods using the theory of a Cosserat point. *Int. J. Solids Structures*, 38, 4395.
