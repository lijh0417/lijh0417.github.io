---
title: "Multiscale model of non-Euclide plate"
date: 2025-04-28
---
As a successful model, non-Euclide plate is widely applied in predicting the morphing behavior of bilayer structure. However, although anisotropic swelling can be well describe by this model, the mechanics properties, specifically speaking the Young's modulus, are isotropic in this model. In reality, it is nearly impossible to find materials with such characteristics. In general, the swelling direction constrained by the alligned fibril is the micromechanism of the anisotropic swelling, which inevitably leads to the anisotropy of Young's modulus. Understanding the coupling effect of ansiotrpic Young's modulus and anisotropic swelling is still far from being investigated. In this note, we build the multiscale non-Euclide plate model from fibril-matrix mesomechanics constitutive. The effect of anisotropic mechanics properties is evaluated by taking the helicoid-to-helix ribbon transformation as an example.

 
## Introduction
In this note, we will bulid a multiscale non-Euclide plate model. We aim to solve these questions: what is the effect of the anisotropy of mechanics properties and if it can be ignored?

## Build the Anisotropic Energy
The energy functional of a bilayer plate subject to intrinsic strain is given by:

$$
U=\frac{1}{2}\int{\left( \int_0^{t/2}{\left( \boldsymbol{\varepsilon }_a-\boldsymbol{\eta }_a \right) :\boldsymbol{D}_a}:\left( \boldsymbol{\varepsilon }_a-\boldsymbol{\eta }_a \right) dz+\int_{-t/2}^0{\left( \boldsymbol{\varepsilon }_b-\boldsymbol{\eta }_b \right) :\boldsymbol{D}_b}:\left( \boldsymbol{\varepsilon }_b-\boldsymbol{\eta }_b \right) dz \right) dA}
$$

The in-plane strain and the out-of-plane strain can be coupled together by Kirchhoff-Love assumption. Then the strain of the plane in thickness direction can be expressed as:

$$
\boldsymbol{\varepsilon }_a=\boldsymbol{\varepsilon }_{\boldsymbol{b}}=\frac{1}{2}\left( \mathbf{a}-\mathbf{I} \right) +z\mathbf{b}
$$

$\boldsymbol{a}$ and $\boldsymbol{b}$ are the first and second foundamental form of the plate middle surface:

$$\mathbf{a}=\left( \begin{array}{c}
	\mathrm{E}\\
	\mathrm{G}\\
	2\mathrm{F}\\
\end{array} \right) , \mathbf{b}=\left( \begin{array}{c}
	\mathrm{L}\\
	\mathrm{N}\\
	2\mathrm{M}\\
\end{array} \right) $$

For the orthogonal symmetric bilayer structure, the intrinsic strain can be expressed as:

$$\boldsymbol{\eta }_a=\left( \begin{array}{c}
	\eta _1\\
	\eta _2\\
	0\\
\end{array} \right) , \boldsymbol{\eta }_b=\left( \begin{array}{c}
	\eta _2\\
	\eta _1\\
	0\\
\end{array} \right) $$