---
title: "Inverse design of the geometry frustrated elastica"
date: 2025-04-28
---
## Introduction
In this note, we will discuss an inverse design problem: given an elastica the objective configuration, how to decide the undeformed configuration under the clamped-clamped boundary condition? 

## Analysis
For this problem, we have two qualitative analysis before solving the math equations of Euler's elastica.

On the one hand, it is apparent that the solution of this problem is not unique. Imagine that the objective configuration is an arc, there are at least two undeformed configurations fit this problem: a straight beam, which can be bent into an arc with the two ends clamped, and an arc, which is the same as the objective configuration. The clamped ends porvide the desired moment for the first case, but the restriction reaction forces for the second case are zero, which means the clamped-clamped boundary condition does not make sense for this system, although the arc configuration is the solution of this inverse design problem. 

On the other hand, the undeformed configuration, as the solution of this inverse design problem, is irrelevant to the material properties under the clamped-clamped boundary condition applied. To understand this point, we consider two straight beams with the same length but different bending stiffness. If we bend them into an arc, their deformed configurations are the same. This is an interesting point of geometry frustration: the clamped-clamped boundary condition can provide constraint reaction forces of any size.

To fully understand this problem, we give a specific case: design the undeformed configuration of an arc.

## Inverse design of an arc
The control equations of Kirchhoff rod can be written as：
$$
\mathbf{F}_s+\mathbf{q}=0\\
\mathbf{M}_s+\mathbf{d}_3\times\mathbf{F}+\mathbf{m}=0
\tag{1}
$$
Consider the linear elastic constitutive $M=EI(\kappa-\bar{\kappa})$ and expand the moment and force into the two dimensional local frame，$\mathbf{F}=F_3\mathbf{d}_3+F_1\mathbf{d}_1$, $\mathbf{M}=M\mathbf{d}_2$:
$$
\left\{
    \begin{aligned}
(F_3)_s-\kappa F_1=0\\
(F_1)_s+\kappa F_3=0\\
EI(\kappa_s-\bar{\kappa}_s)+F_1=0
\end{aligned}
\right.\tag{2}
$$
If the objective configuration is an arc, we have $\kappa=c=\rm{const}$, eq. (2) can be solved as:
$$
\left\{
    \begin{aligned}
    F_3=F_0\sin\theta\\
    F_1=F_0\cos\theta\\
    EI\bar{\kappa}_s=F_0\cos\theta\\
    \theta=s/R
    \end{aligned}
\right. \tag{3}
$$
Finally, we have: $\bar{\kappa}=\frac{F_0R}{EI}\sin(s/R)+\bar{\kappa}_0$, where $\bar{\kappa}_0=\rm{const}$ is an integrate constant. 
$$
\bar{\kappa}=\frac{F_0R}{EI}\sin(s/R)+\bar{\kappa}_0
\tag{4}
$$

If the forces applied at the two ends are zero, the undeformed configuration is an arc or a straight line and the natural curvature is constant of any size as shown in section 2. If the reaction forces are not zero, eq. (4) is the solution of this inverse problem.

Given the arbitrary forces as boundary condition, the solution can be derived by solving eq. (3). However, the solved undeformed configuration may not be what we want. For instance, for the 3 dimensional cases, we want the undeformed configuration to be a planar curve. This inverse problem intrinsically is an optimization problem:  
$$
min_{F_{0}} f(\bar{\kappa},\kappa_{obj})
$$
