---
title: "How to Understand the Kirchhoff Rod?"
date: 2023-02-08 16:03:13
tags:
  - Geometric Elasticity
  - Rod
lang: en
ref: understanding-kirchhoff-rod
permalink: /2023/02/understanding-kirchhoff-rod/
---

Notes for Kirchhoff rod theory.

<!--more-->

## Preface

I have long wanted to write an article explaining the principles of elastic rods, but due to limited ability, I kept putting it off. Elastic rods have a wide range of applications in everyday life. Here are a few examples.

- Why are some plant tendrils helical while others are planar curves?
- How do grapevines climb a trellis? How do snakes move? (including on a plane and on curved surfaces: snakes climbing trees)
- How can submarine cables be laid more reliably?
- When holding the two ends of a rope and twisting them in opposite directions, why does the middle of the rope form a twisted shape?
- The shape of a catenary, [elastic catenary](./2022-10-09-弹性悬链线问题.md), and the shape of an elastic catenary considering bending energy?
- How is DNA structure governed by mechanics?
- Stress distribution in a Möbius strip? (Mahadevan L 1993)
- How does a bamboo shoot grow into a conical shape?

The applications of elastic rods are numerous and won't be listed here. In fact, many historically famous problems are special cases of elastic rods, such as the catenary problem, the elastic catenary problem, twist buckling, the falling rope problem, and others. Moreover, many famous scientists have contributed to the study of elastic rods, including Euler, Kirchhoff, Bernoulli, Bonn, and others. Additionally, elastic rods require knowledge of classical differential geometry. It should be recognized that elastic rods are not only closely related to curve theory but also intimately connected to elastic structures on manifolds. This is not detached from reality: when a linear elastic problem is constrained to move on a surface (a two-dimensional manifold), the theory of elasticity on manifolds may play an important role. (A snake climbing a tree is a very practical example.) At the end of the last century, David Singer & Langer studied Euler's elastic rods on Riemannian manifolds, which only considered static solutions with bending energy — there is still much to explore in this area.

The main goal here is to address two questions:

- 1 What physical quantities govern the motion of an elastic rod, and why is the motion of an elastic rod solvable?
- 2 What are the difficulties in studying elastic rods?

It should be noted upfront that expecting to solve the motion of arbitrary elastic rods through PDE numerical methods after mastering the elastic rod framework is unrealistic. Even without any theory, common sense tells us that the curvature of some rope knots changes drastically, often causing numerical algorithms to fail. Furthermore, even for two-point boundary value problems of ODEs, guessing the initial values is difficult and often requires physical insight. The use of Matlab's built-in shooting method functions `bvp4c` and `bvp5c` is described as "more of an art than a technique." One can imagine how much more difficult it is to solve elastic rod equations under complex boundary conditions. In recent years, the development of Discrete Elastic Rods (DER) has made it possible to simulate many elastic rod mechanical behaviors using computers. Essentially, the study of DER is more about overcoming numerical difficulties than physical theory.

## Overview: What Physical Quantities Are Involved?

Whether it is plate/shell theory or elastic rod theory, both are simplified theories derived from elasticity through geometric symmetry. As in continuum mechanics, problem-solving involves three parts: geometric equations, constitutive equations, and equilibrium equations.

$$
\{\mathbf{u}, \mathbf{v}, \mathbf{\omega}, \mathbf{k}, \mathbf{M}, \mathbf{Q}, \mathbf{\theta}\}
$$

The seven quantities above have a total of 21 components, all functions of the arc-length coordinate and time.

**Physical meanings:**

| Quantity | Physical Meaning |
| :---: | :---: |
| $\mathbf{u}$ | Displacement |
| $\mathbf{v}$ | Velocity |
| $\mathbf{\omega}$ | Temporal Darboux vector |
| $\mathbf{k}$ | Spatial Darboux vector |
| $\mathbf{M}$ | Internal moment |
| $\mathbf{Q}$ | Internal force |
| $\mathbf{\theta}$ | Euler angles (quaternions) |

**The seven equations for elastic rods:**

- 1 Kirchhoff equilibrium equations (2)
- 2 Spatiotemporal geometric transformation equations (relation between rotation tensor and Euler angles/quaternions) (2)
- 3 Velocity and tangent vector constitutive equations (relation between velocity and displacement, displacement and tangent vector via Frenet equations) (2)
- 4 Constitutive equation (1)

Each equation has three components, giving a total of 21 component-form equations. In addition, there are the Frenet equations, which are used when expanding displacement, internal force, and internal moment in local coordinates and taking derivatives.

<table>
  <thead>
    <tr>
      <th>Equation</th>
      <th>Physical Meaning</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>
        $$
        \frac{\partial \mathbf{F}}{\partial s}
        + \mathbf{q}
        = \rho \mathbf{A} \ddot{\mathbf{r}}
        $$
      </td>
      <td>Force balance</td>
    </tr>

    <tr>
      <td>
        $$
        \frac{\partial \mathbf{M}}{\partial s}
        + \frac{\partial \mathbf{r}}{\partial s} \times \mathbf{F}
        + \mathbf{m}
        =
        \mathrm{I}_3 \mathbf{d}_2 \times \ddot{\mathbf{d}}_2
        + \mathrm{I}_2 \mathbf{d}_3 \times \ddot{\mathbf{d}}_3
        $$
      </td>
      <td>Moment balance</td>
    </tr>

    <tr>
      <td>
        $$
        \dot{\mathbf{r}} = \frac{\partial \mathbf{u}}{\partial t}
        $$
      </td>
      <td>Velocity-displacement relation</td>
    </tr>

    <tr>
      <td>
        $$
        \mathbf{d}_1 = \frac{\partial \mathbf{u}}{\partial s}
        $$
      </td>
      <td>Tangent-displacement relation</td>
    </tr>

    <tr>
      <td>
        $$
        \mathbf{\Gamma} = \mathbf{R}_s \mathbf{R}^{T}
        $$
      </td>
      <td>Spatial rotation vector and Euler angles</td>
    </tr>

    <tr>
      <td>
        $$
        \mathbf{\Omega} = \mathbf{R}_t \mathbf{R}^{T}
        $$
      </td>
      <td>Temporal rotation vector and Euler angles</td>
    </tr>

    <tr>
      <td>
        $$
        \mathbf{M} = \mathrm{EI}(\mathbf{\Gamma})
        $$
      </td>
      <td>Generalized Hooke's law</td>
    </tr>

  </tbody>
</table>


## Origin of Elasticity: Constitutive Relation

When I was a child, my family ran a small shop selling various gauges of metal wire. There were some interesting phenomena: bending a thin wire — it easily springs back to its original shape, but a thick wire does not; for wires of the same thickness, iron wire springs back quickly while lead wire does not. If you are familiar with Euler beam theory, you can understand this. The bending stiffness is $\mathrm{D}=\mathrm{EI}$, where $\mathrm{E}$ and $\mathrm{I}$ are the Young's modulus and the second moment of area, respectively. For a circular cross-section: $\mathbf{I}=\frac{\mathrm{A}^{2}}{2 \pi}=\frac{\pi \mathrm{r}^{4}}{2}$. This reflects both the "thickness" and the material type of the wire. The combination of these two quantities relates the bending deformation of the wire to external forces. For the same material, the elastic limit is fixed; the larger the bending stiffness, the easier it is to reach the elastic limit and enter the plastic stage. This explains why a thick wire does not recover its shape easily after bending. Bernoulli's hypothesis: the plane cross-section assumption yields the bending constitutive relation: $M=\mathrm{EI}\kappa$.

$$
\mathbf{M}=M_{i} \mathbf{d}_{i}
$$

$$
M_{1}=G J m
$$

$$
M_{2}=E I_{2} m_{1}
$$

$$
M_{3}=E I_{3} m_{2}
$$

## Geometric Compatibility Relations

### Quaternions, Euler Angles, and Their Relation to the Frame Tensor

![Quaternions, Euler Angles, and Their Relation to the Frame Tensor](/assets/images/2023-02-08-如何理解Kirchhoff弹性杆？/转换.bmp)

First, we present some properties of the Frame Tensor and its relations with the Rotation Tensor and Darboux Vector. Let us clarify in advance that using $s$ as a variable is merely for convenience and has no special physical meaning — no claim is made as to whether the local frame is obtained by transforming the initial frame through time or through the arc-length parameter.

[How to view curve theory from the perspective of tensors?](https://lijh0417.github.io/2022/11/19/%E5%A6%82%E4%BD%95%E4%BB%A5%E5%BC%A0%E9%87%8F%E7%9A%84%E8%A7%82%E7%82%B9%E7%9C%8B%E5%BE%85%E6%9B%B2%E7%BA%BF%E8%AE%BA%EF%BC%9F/)

$$
\begin{array}{l}
\Omega+\Gamma=0 \\
\Gamma=\epsilon \cdot \omega \\
\omega=\frac{1}{2} \epsilon: \Gamma \\
\frac{1}{2} \epsilon: \Omega+\omega=0 \\
\epsilon \cdot \omega+\Omega=0
\end{array}.
$$

$$
\Gamma_{i}^{j}=\frac{d R_{i}^{m}}{d s} R_{j}^{m}+R_{i}^{n} \Gamma_{0 n}^{m} R_{j}^{m}
$$

Characteristic quantities of various coordinate systems:

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">

<div>

<strong>Bishop Frame</strong>

$$
\Gamma =
\begin{pmatrix}
0 & \kappa_1 & \kappa_2 \\
-\kappa_1 & 0 & 0 \\
-\kappa_2 & 0 & 0
\end{pmatrix}
$$

$$
\Omega = -\Gamma
$$

$$
\omega = -\kappa_2 \mathbf{d}_2 + \kappa_1 \mathbf{d}_3
$$

</div>

<div>

<strong>Frenet Frame</strong>

$$
\Gamma =
\begin{pmatrix}
0 & \kappa & 0 \\
-\kappa & 0 & \tau \\
0 & -\tau & 0
\end{pmatrix}
$$

$$
\Omega = -\Gamma
$$

$$
\omega = \tau \mathbf{d}_1 + \kappa \mathbf{d}_3
$$

</div>

<div>

<strong>Material Frame</strong>

$$
\Gamma =
\begin{pmatrix}
0 & m_1 & m_2 \\
- m_1 & 0 & m \\
- m_2 & - m & 0
\end{pmatrix}
$$

$$
\Omega = -\Gamma
$$

$$
\omega = m \mathbf{d}_1 - m_2 \mathbf{d}_2 + m_1 \mathbf{d}_3
$$

</div>

<div>

<strong>General Frame</strong>

$$
\Gamma =
\begin{pmatrix}
0 & \omega_3 & -\omega_2 \\
-\omega_3 & 0 & \omega_1 \\
\omega_2 & -\omega_1 & 0
\end{pmatrix}
$$

$$
\Omega = -\Gamma
$$

$$
\omega = \omega_1 \mathbf{d}_1 + \omega_2 \mathbf{d}_2 + \omega_3 \mathbf{d}_3
$$

</div>

</div>

In other words, the reason the Material Frame and Bishop Frame arise is that rotation about $\mathbf{d}_2$ or $\mathbf{d}_3$ manifests as bending, while rotation about $\mathbf{d_1}$ manifests as torsion. This reflects the unique symmetry of curves (and further illustrates the importance of geometric symmetry simplifications in continuum mechanics). This symmetry determines that, regardless of how the spatial frame is chosen, it is always good practice to select the tangent vector as the first basis vector of the body frame. Equation (3) shows that the Frame Tensor for various frames can be obtained by rotating the General Frame about the $\mathbf{d_1}$ axis, which is why the parameter naming for the Bishop Frame and Material Frame is symmetric about $\mathbf{d_1}$.

[Whittaker, E. T.](https://eclass.uoa.gr/modules/document/file.php/PHYS181/%CE%92%CE%B9%CE%B2%CE%BB%CE%B9%CE%B1/Whittaker.pdf) gives the relationship between quaternions and the Frenet tensor in the transformation from fixed coordinates to body coordinates.

$$
\begin{array}{c}
\left(\begin{array}{l}
\mathbf{d}_{1} \\
\mathbf{d}_{2} \\
\mathbf{d}_{3}
\end{array}\right)=\mathbf{R}\left(\begin{array}{l}
\mathbf{e}_{1} \\
\mathbf{e}_{2} \\
\mathbf{e}_{3}
\end{array}\right), \qquad
\left(\begin{array}{l}
\mathbf{d}_{1 s} \\
\mathbf{d}_{2 s} \\
\mathbf{d}_{3 s}
\end{array}\right)=\mathbf{\Gamma}\left(\begin{array}{l}
\mathbf{d}_{1} \\
\mathbf{d}_{2} \\
\mathbf{d}_{3}
\end{array}\right) \\
\left(\begin{array}{c}
\mathbf{d}_{1 s} \\
\mathbf{d}_{2 s} \\
\mathbf{d}_{3 s}
\end{array}\right)=\mathbf{R}_{s}\left(\begin{array}{l}
\mathbf{e}_{1} \\
\mathbf{e}_{2} \\
\mathbf{e}_{3}
\end{array}\right)=\mathbf{\Gamma}\left(\begin{array}{l}
\mathbf{d}_{1} \\
\mathbf{d}_{2} \\
\mathbf{d}_{3}
\end{array}\right)=\mathbf{\Gamma} \mathbf{R}\left(\begin{array}{l}
\mathbf{e}_{1} \\
\mathbf{e}_{2} \\
\mathbf{e}_{3}
\end{array}\right)
\end{array}
$$

$$
\mathbf{\Gamma}=\mathbf{R}_{s} \mathbf{R}^{\mathbf{T}}
$$

When the rotation matrix is expressed in quaternion form, we obtain the relation between the Frame Tensor and quaternions; when expressed in Euler angle form, we obtain the relation between the Frame Tensor and Euler angles. Either is fine. The three components of the Frame Tensor appear to give three equations, but for quaternion-represented rotations there is an additional implicit constraint: $q_{0}^{2}+q_{1}^{2}+q_{2}^{2}+q_{3}^{2}=1$. This makes the relation between the Frame Tensor and the rotation parameters solvable whether three parameters $\alpha, \beta, \gamma$ are used for Euler angles or four parameters are used for quaternions. This is an important geometric relation in solving elastic rod motion, because dead loads are generally expressed in fixed coordinates, while the equations of motion for elastic rods are formulated in local coordinates.

Some computational functions for quaternions and Euler angles: Equation (5) shows that the following three matrices are equivalent:
<div style="display: grid; grid-template-columns: 1fr; gap: 24px; text-align: center;">

<div>

<strong>Frame Tensor (Material)</strong>

$$
\mathbf{M} =
\begin{pmatrix}
0 & m_1 & m_2 \\
- m_1 & 0 & m \\
- m_2 & - m & 0
\end{pmatrix}
$$

</div>

<div>

<strong>$\mathrm{R}_s \mathrm{R}^T$ (Euler form (3,2,3))</strong>

$$
\begin{pmatrix}
0 & -\alpha_s - \cos(\beta)\gamma_s & \sin(\alpha)\sin(\beta)\gamma_s + \cos(\alpha)\beta_s \\
\alpha_s + \cos(\beta)\gamma_s & 0 & \sin(\alpha)\beta_s - \cos(\alpha)\sin(\beta)\gamma_s \\
-\sin(\alpha)\sin(\beta)\gamma_s - \cos(\alpha)\beta_s & \cos(\alpha)\sin(\beta)\gamma_s - \sin(\alpha)\beta_s & 0
\end{pmatrix}
$$

</div>

<div>

<strong>$\mathrm{R}_s \mathrm{R}^T$ (Quaternion form)</strong>

$$
\begin{pmatrix}
0 & 2(q_3 q_{0s} - q_0 q_{3s} + q_2 q_{1s} - q_1 q_{2s}) &
2(-q_2 q_{0s} + q_0 q_{2s} + q_3 q_{1s} - q_1 q_{3s}) \\
2(-q_3 q_{0s} + q_0 q_{3s} - q_2 q_{1s} + q_1 q_{2s}) & 0 &
2(q_1 q_{0s} - q_0 q_{1s} + q_3 q_{2s} - q_2 q_{3s}) \\
2(q_2 q_{0s} - q_0 q_{2s} - q_3 q_{1s} + q_1 q_{3s}) &
2(-q_1 q_{0s} + q_0 q_{1s} - q_3 q_{2s} + q_2 q_{3s}) & 0
\end{pmatrix}
$$

</div>

</div>

The relation among quaternions, Euler angles, and the Frame Tensor:

$$
\left\{\begin{array}{l}
m_{1}=2(q_{3} q_{0s} -q_{0} q_{3s}+q_{2} q_{1s} -q_{1} q_{2s})= - \alpha_s - \cos(\beta) \gamma_{s}\\
m_{2}=2(-q_{2} q_{0s}+q_{0} q_{2 s}+q_{3} q_{1 s}-q_{1} q_{3 s})=\sin (\alpha) \sin (\beta) \gamma_{s}+\cos(\alpha) \beta_{s}
\\m=2(q_{1} q_{0 s}-q_{0} q_{1 s}+q_{3} q_{2 s}-q_{2} q_{3 s})=\sin(\alpha)\beta_{s}- \cos (\alpha) \sin(\beta) \gamma_{s}
\end{array}\right.
$$

### Relation Between the Temporal Darboux Vector and the Spatial Darboux Vector

The motion of a point on an elastic rod involves two independent variables: time $t$ and arc-length $s$. Naturally, two sets of Frame Tensors are needed to relate the partial derivatives of the local frame with respect to these two variables to the local frame itself.

In general, consider a physical quantity $\mathbf{A}(s, t) = \mathrm{A}_i(s, t)\,\mathbf{d}_i(s, t)$ in the elastic rod equations, and require that the second-order mixed partial derivatives with respect to time and space commute. (Why is this required? It may reflect the actual physical requirement that the quantity be smooth, analogous to displacement in stress waves. Using the commutativity of second-order mixed spacetime derivatives, we obtain the conclusion that the velocity gradient equals the strain rate.)

$$
\frac{\partial^{2} \mathbf{A}}{\partial \mathrm{s} \partial \mathrm{t}}=\frac{\partial^{2} \mathbf{A}}{\partial t \partial s}
$$

Consider the case where $\mathrm{\m}athbf{A}_i(s,t)$ is constant. From equation (5) we obtain:

$$
\mathrm{A}_{i} \frac{\partial\left(\omega \times \mathbf{d}_{i}\right)}{\partial \mathrm{s}}=\mathrm{A}_{i} \frac{\partial\left(\mathbf{k} \times \mathbf{d}_{i}\right)}{\partial \mathrm{t}}
$$

$$
\begin{aligned}
\mathrm{A}_{i}\left(\omega_{s} \times \mathbf{d}_{i}+\omega \times\left(\mathbf{k} \times \mathbf{d}_{i}\right)\right) & =\mathbf{A}_{i}\left(\mathbf{k}_{s} \times \mathbf{d}_{i}+\mathbf{k} \times\left(\omega \times \mathbf{d}_{i}\right)\right)
\end{aligned}
$$

$$
\begin{aligned}
\omega_{s} \times \mathbf{A}+\omega \times(\mathbf{k} \times \mathbf{A}) =  \& \mathbf{k}_{t} \times \mathbf{A}+\mathbf{k} \times(\omega \times \mathbf{A})
\end{aligned}
$$

Using the Jacobi identity $\omega \times(\mathbf{k} \times \mathbf{A})+\mathbf{k} \times(\mathbf{A} \times \omega)+\mathbf{A} \times(\omega \times \mathbf{k})=0$, we obtain:

$$
\left(\omega_{s}-\mathbf{k}_{t}+\omega \times \mathbf{k}\right) \times \mathbf{A}=0
$$

Since $\mathrm{\m}athbf{A}$ is arbitrary, we have the identity: $\left(\omega_{s}-\mathbf{k}_{t}+\omega \times \mathbf{k}\right)=0$

Using the relation between the Darboux Vector and the Frame Tensor $\omega=\frac{1}{2} \epsilon: \Gamma$, we obtain:

$$
\mathbf{\Omega}_{s}-\mathbf{K}_{t}=[ \mathbf{K},\mathbf{\Omega}]
$$

Here $\mathrm{\m}athbf{\Omega},\mathbf{K}$ are the Frame Tensors corresponding to $\omega$ and $k$, respectively.

**This is a redundant equation, because:**

From the relation between the Frenet Tensor and the rotation tensor:

$$
\begin{cases}
\mathbf{K}=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}\\
\mathbf{\Omega }=\mathbf{R}_t\mathbf{R}^{\mathbf{T}}\\
\end{cases}
$$

Consider the property of the rotation tensor: $\mathbf{RR}^{\mathbf{T}}=\mathbf{R}^{\mathbf{T}}\mathbf{R}=\mathbf{E}$. Differentiating gives $\mathbf{R}_s\mathbf{R}^{\mathbf{T}}+{\mathbf{RR}^{\mathbf{T}}}_s=\mathbf{R}_t\mathbf{R}^{\mathbf{T}}+{\mathbf{RR}^{\mathbf{T}}}_t=0$, which simplifies to:

$$
\begin{cases}
{\mathbf{R}^{\mathbf{T}}}_s=-\mathbf{R}^{\mathbf{T}}\mathbf{R}_s\mathbf{R}^{\mathbf{T}}\\
{\mathbf{R}^{\mathbf{T}}}_t=-\mathbf{R}^{\mathbf{T}}\mathbf{R}_t\mathbf{R}^{\mathbf{T}}\\
\end{cases}
$$

From equation (14):

$$
\begin{aligned}
\mathbf{\Omega }_s-\mathbf{K}_t&=\mathbf{R}_{ts}\mathbf{R}^{\mathbf{T}}+\mathbf{R}_t{\mathbf{R}^{\mathbf{T}}}_s - \mathbf{R}_{st}\mathbf{R}^{\mathbf{T}}-\mathbf{R}_s{\mathbf{R}^{\mathbf{T}}}_t\\
&=\mathbf{R}_t{\mathbf{R}^{\mathbf{T}}}_s-\mathbf{R}_s{\mathbf{R}^{\mathbf{T}}}_t\\
&=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}\mathbf{R}_t\mathbf{R}^{\mathbf{T}}-\mathbf{R}_t\mathbf{R}^{\mathbf{T}}\mathbf{R}_s\mathbf{R}^{\mathbf{T}}=\left[ \mathbf{K},\mathbf{\Omega } \right]
\end{aligned}
$$

### Velocity and Displacement

Using the local frame basis vectors, the velocity and displacement of an elastic rod can be expressed as:

$$
\begin{array}{l}
\dot{\mathbf{r}}=\frac{\partial \mathbf{u}}{\partial t} \\
\mathbf{d}_{1}=\frac{\partial \mathbf{u}}{\partial s}
\end{array}.
$$

## Physical Equilibrium

Kirchhoff [Über das Gleichgewicht und die Bewegung einer elastischen Scheibe](https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0040/PPN243919689_0040.pdf)

### Force Balance

![Free-body diagram of an elastic rod element](/assets/images/2023-02-08-如何理解Kirchhoff弹性杆？/受力.bmp)

As mentioned earlier, the shearless constitutive relation for elastic rods arises from the plane cross-section assumption, which is again used here (the shearless condition). During the motion of an elastic rod, the cross-section remains perpendicular to the axis, so the motion of points on the axis can represent the motion of the rod element. Note that the axis is a curve traced by the centroid of the cross-section as the arc-length parameter varies.

Applying the center-of-mass theorem to an elastic rod element, we obtain the force balance equation (linear momentum):

$$
\rho \mathrm{A} \ddot{\mathbf{r}} d s=\mathrm{d} \mathbf{F}+\mathbf{q} d s
$$

$$
\frac{\partial \mathbf{F}}{\partial s}+\mathbf{q}=\rho \mathbf{A} \ddot{\mathbf{r}}
$$

### Moment Balance

The derivation of the moment balance equation is more involved. Since we view the motion of the elastic rod from a fixed coordinate system, we can decompose the angular momentum of a rod element into two parts: angular momentum relative to the center of mass + center-of-mass angular momentum, i.e., $\mathrm{\m}athbf{L=L_c+L_r}$. First, consider $\mathrm{\m}athbf{L_c}$, which is the angular momentum of a point at the center of the axis relative to the origin. It can be written directly as $\mathrm{\mathbf{L_c=r\times \dot{r}}}\rho A ds$.

Now consider the angular momentum of material points on the cross-section relative to the center of mass:

![Moment balance diagram of an elastic rod element](/assets/images/2023-02-08-如何理解Kirchhoff弹性杆？/矩平衡.bmp)

$$
\mathbf{L}_{r}=\iint_{S} \mathbf{p} \times \dot{\mathbf{p}} d x d y \rho d s
$$

Applying the angular momentum theorem for the center of mass to the element, we obtain the moment balance equation (angular momentum):

$$
\mathrm{d}\mathbf{M}+\mathbf{m}ds+(\mathbf{r}+d\mathbf{r})\times (\mathbf{F}+\mathrm{d}\mathbf{F})-\mathbf{r}\times \mathbf{F}=\frac{\mathrm{d}\mathbf{L}}{\mathrm{dt}}
$$

$$
\frac{\partial \mathbf{M}}{\partial s}+\mathbf{m}+\mathbf{r} \times\left(\frac{\partial \mathbf{F}}{\partial s}+\mathbf{q}\right)+\frac{\partial \mathbf{r}}{\partial s} \times \mathbf{F}=\frac{\mathrm{d} \mathbf{L}_{s}}{\mathrm{dt}}
$$

Differentiating the angular momentum with respect to time, applying the product rule for cross products, and noting that odd powers of $x,y$ integrate to zero over the cross-section, we obtain:

$$
\frac{\mathrm{d} \mathbf{L}_{s}}{\mathrm{dt}}=\rho A \mathbf{r} \times \ddot{\mathbf{r}}+\mathrm{I}_{3} \mathbf{d}_{2} \times \ddot{\mathbf{d}}_{2}+\mathrm{I}_{2} \mathbf{d}_{3} \times \ddot{\mathbf{d}}_{3}
$$

Here $\mathrm{\m}athbf{I_3,I_2}$ are the moments of inertia about the $\mathrm{\m}athbf{d}_3$ and $\mathrm{\m}athbf{d}_2$ axes, respectively, and $\mathrm{\m}athbf{L_s}$ is the angular momentum per unit length. Combining equations (16) and (17) and simplifying using equation (13), we obtain the moment balance equation:

$$
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \mathbf{r}}{\partial s} \times \mathbf{F}+\mathbf{m}=\mathrm{I}_{3} \mathbf{d}_{2} \times \ddot{\mathbf{d}}_{2}+\mathrm{I}_{2} \mathbf{d}_{3} \times \ddot{\mathbf{d}}_{3}
$$

Moments of inertia of the cross-section:

$$
\mathrm{I}_3 = \iint_{\mathbf{S}} x^2 \,\mathrm{d}x\,\mathrm{d}y,
\qquad
\mathrm{I}_2 = \iint_{\mathbf{S}} y^2 \,\mathrm{d}x\,\mathrm{d}y
$$

## Elastic Rods on Riemannian Manifolds

The advantage of deriving the elastic rod equations using the force method is that it clearly reveals the mathematical structure of the governing equations arising from each physical quantity. If we take an energy approach, we can roughly obtain the equations satisfied by the Euler elastic line (Kirchhoff rods without torsion). The elastic line equations in Euclidean space were already explained in [The Elastic Rod Problem and Its Numerical Solution](https://lijh0417.github.io/2022/11/02/%E5%BC%B9%E6%80%A7%E7%BA%BF%E9%97%AE%E9%A2%98%E4%B8%8E%E6%95%B0%E5%80%BC%E6%B1%82%E8%A7%A3/). Even from this simple example of Euler's elastic line, one can see the difficulty of numerical solution (the Euler method has low accuracy and requires a predictor-corrector algorithm).

The curvature of a curve on a surface can be decomposed into normal curvature and geodesic curvature. Normal curvature is the curvature of the section curve obtained by intersecting the surface with the normal plane at a point; geodesic curvature measures the deviation of a curve from a geodesic. On a plane, the elastic line is constrained by minimizing the square of curvature (geodesic curvature, where normal curvature is zero). If we consider an elastic line on a surface constrained by minimizing the square of geodesic curvature (which may occur in some anisotropic elastic rods), we obtain the Euler elastic line equation on a surface.

How should we think about this? In general, classical mechanics considers the dynamics of objects in three-dimensional flat spacetime, which is assumed to exist. An elastic line on a surface can be thought of as the motion of a one-dimensional filament on a two-dimensional manifold. Whether or not the two-dimensional manifold is flat, it can be embedded in three-dimensional flat spacetime. Therefore, elastic lines on surfaces have practical applications.

First, we prove a property of torsion-free Riemannian manifolds (where the Levi-Civita connection is symmetric). Here $D$ is the generalization of the directional derivative, called the covariant derivative. In classical differential geometry of surfaces, it can be understood as the vector derivative without the normal component. See *Riemannian Geometry* by Houhong Wu for details:

$$
D_{X}Y-D_{Y}X=[X ,Y]
$$

$$
\begin{aligned}
D_XY-D_YX &= D_{X^i\frac{\partial}{\partial x^i}}\left( Y^j\frac{\partial}{\partial x^j} \right) \\
&= X^i\frac{\partial Y^j}{\partial x^i}\frac{\partial}{\partial x^j}+X^iY^j\Gamma _{ij}^{k}\frac{\partial}{\partial x^k}-Y^i\frac{\partial X^j}{\partial x^i}\frac{\partial}{\partial x^j}-Y^iX^j\Gamma _{ij}^{k}\frac{\partial}{\partial x^k} \\
&= X^i\frac{\partial Y^j}{\partial x^i}\frac{\partial}{\partial x^j}-Y^i\frac{\partial X^j}{\partial x^i}\frac{\partial}{\partial x^j}=XY-YX=\left[ X,Y \right]
\end{aligned}
$$

The Frenet equations for a curve on a Riemannian manifold are:

$$
\begin{cases}
\gamma '\left( t \right) =vT\\
D_TT=\kappa N\\
D_TN=-\kappa T+\tau B\\
D_TB=-\tau N\\
\end{cases}
$$

Consider a variation of $\gamma$ with respect to a new parameter $w$ and the velocity vector $v$:

$$
\begin{cases}
W=\frac{\partial \gamma}{\partial w}\\
V=\frac{\partial \gamma}{\partial t}=vT\\
\end{cases}
$$

The partial derivatives with respect to $w$ and $t$ commute, so $[W,V]=0$

$$
\begin{aligned}
\left[ W,V \right] &=\left[ W,vT \right] =W\left( v \right) T+vWT-vTW\\
&= W\left( v \right) T+v\left[ W,T \right] =0\\
2vW\left( v \right) &= W\left( v^2 \right) =2\left< D_WV,V \right> =2\left< D_VW,V \right> =2v^2\left< D_TW,T \right>
\end{aligned}
$$

From the above:

$$
W\left( v \right) =v\left< D_TW,T \right> \\
\left[ W,T \right] =-\left< D_TW,T \right> T
$$

The variation of the curvature with respect to $w$ is:

$$
\begin{aligned}
W\left( \kappa ^2 \right) &= 2\left< D_WD_TT,D_TT \right> \\
&= 2\left< R\left( W,T \right) T+D_TD_WT+D_{[W,T]}T,D_TT \right> \\
&= 2\left< R\left( W,T \right) T+D_T\left( D_TW-\left< D_TW,T \right> T \right) -\left< D_TW,T \right> D_TT,D_TT \right> \\
&= 2\left< R\left( W,T \right) T+D_TD_TW-2\left< D_TW,T \right> D_TT,D_TT \right> \\
&= 2\left< R\left( W,T \right) T,D_TT \right> +2\left< D_TD_TW,D_TT \right> -4\left< D_TW,T \right> \left< D_TT,D_TT \right>
\end{aligned}
$$

Consider the energy functional: $E=\frac{1}{2}\int\kappa^2+\lambda ds=\frac{1}{2}\int(\|D_{T}T\|^2+\lambda)v(t)dt$

Taking the variation:

$$
\begin{aligned}
\frac{dE}{dw}&=\frac{1}{2}\int{W\left( \kappa ^2 \right) v+\left( \kappa ^2+\lambda \right)}W\left( v \right) dt\\
&=\frac{1}{2}\int{W\left( \kappa ^2 \right) +\left( \kappa ^2+\lambda \right)}\left< D_TW,T \right> ds\\
&=\int{\left< R\left( W,T \right) T,D_TT \right> +\left< D_TD_TW,D_TT \right> +\frac{\lambda -3\kappa ^2}{2}\left< D_TW,T \right> \,\,ds}\\
&=\int{\left< R\left( D_TT,T \right) T,W \right>}ds+\int{\left< D_TT,D_TD_TW \right> +\frac{\lambda -3\kappa ^2}{2}\left< D_TW,T \right> \,\,ds}\\
&=\int{\left< E,W \right> ds+\left[ \left< D_TW,D_TT \right> +\left< W,-{D_T}^2T+\frac{\lambda -3\kappa ^2}{2}T \right> \right] \mid_{0}^{L}}
\end{aligned}
$$

where we have used the Riemann curvature tensor $R(X,Y)Z=[D_X,D_Y]Z-D_{[X,Y]}Z$ and the property $< R(X,Y)Z,W > = < R(W,Y)Z,X >$.

Here:

$$
E=\left(D_{T}\right)^{3} T-D_{T}(\frac{\lambda-3\kappa^2}{2}  T)+R\left(D_{T} T, T\right) T
$$

When $E=0$, the above is the equation satisfied by an elastic line on a Riemannian manifold.

**Discussion: For constant-curvature manifolds, the Riemann curvature reduces to the Gaussian curvature $R(D_TT,T)T=D_T(GT)$**

Combining with the Frenet formulas on the manifold:

$$
\begin{aligned}
E&=D_T(\left(D_{T}\right)^{2} T-\frac{\lambda-3\kappa^2}{2}  T+GT)\\
&=D_T(\frac{k^{2}-\lambda+2 G}{2} T+k_{s} N+k \tau B)\\
&=\frac{2 k_{s s}+k^{3}-\lambda k+2 G k-2k \tau^{2}}{2} N+\left(2 k_{s} \tau+k \tau_{s}\right) B
\end{aligned}
$$

The elastic line equation on a constant-curvature manifold (in 2D: sphere, pseudosphere, plane) is:

$$
\begin{cases}
\kappa _{ss}+\frac{\kappa ^3}{2}-\lambda \frac{\kappa}{2}+G\kappa -\kappa \tau ^2=0\\
2\kappa _s\tau +\kappa \tau _s=0\\
\end{cases}
$$

Compared to the [elastic line equation in Euclidean space](./2023-02-28-Kirchhoff弹性杆理论的简化形式.md), there is an additional term $G\kappa$ contributed by the curvature of the manifold.

For the plane, $G=0$, and the elastic line equation on a Riemannian manifold reduces to the elastic line equation in Euclidean space.

## References

1. [Lectures on Elastic Curves and Rods](https://case.edu/artsci/math/singer/publish/elaslecs.pdf)
2. [Riemannian Geometry](https://books.google.com.sg/books/about/%E9%BB%8E%E6%9B%BC%E5%87%A0%E4%BD%95%E5%88%9D%E6%AD%A5.html?id=37wqAAAACAAJ&redir_esc=y)
3. [Mahadevan L. and Keller Joseph B. 1996 Coiling of flexible ropes *Proc. R. Soc. Lond. A.* 452 1679–1694](https://royalsocietypublishing.org/doi/abs/10.1098/rspa.1996.0089)
4. [Mahadevan L. and Keller Joseph Bishop 1993 The shape of a Möbius band *Proc. R. Soc. Lond. A* 440 149–162](https://royalsocietypublishing.org/doi/abs/10.1098/rspa.1993.0009)
5. [Dynamics of Rod](https://link.springer.com/book/10.1007/b137699)
6. [Statics of Rods](https://link.springer.com/book/10.1007/978-3-540-45593-6)
