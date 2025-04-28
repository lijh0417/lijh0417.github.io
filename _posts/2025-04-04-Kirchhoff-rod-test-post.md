---
title: "The Instability of Kirchhoff Rod"
date: 2025-04-04
---
The note of frame perturbation method applied in analyzing the instability of Kirchhoff Rod.
## The basic equation
In this section, we review the basic equation of Kirchhoff rod and derive the basic perturbation format of local frame based on the orthogonality laying the foudation for the instability analysis in next section.

Consider the local frame can be expanded as:

$$
\boldsymbol{d}=\left( \boldsymbol{I}+\varepsilon \boldsymbol{A}+\varepsilon ^2\boldsymbol{B} \right) \left( \begin{array}{c}
	\boldsymbol{d}_1\\
	\boldsymbol{d}_2\\
	\boldsymbol{d}_3\\
\end{array} \right) 
$$

Due to the orthogonality, \( \boldsymbol{d} \) meets \(\boldsymbol{d}\cdot\boldsymbol{d}^t=\boldsymbol{I}\), it comes:

$$
\left( \boldsymbol{I}+\varepsilon \boldsymbol{A}+\varepsilon ^2\boldsymbol{B} \right) \left( \boldsymbol{I}+\varepsilon \boldsymbol{A}^t+\varepsilon ^2\boldsymbol{B}^t \right) =\boldsymbol{I}+\varepsilon \left( \boldsymbol{A}+\boldsymbol{A}^t \right) +\varepsilon ^2\left( \boldsymbol{B}+\boldsymbol{B}^t+\boldsymbol{AA}^t \right) 
$$

So \(\boldsymbol{A}\) is a antisymmetric matrix, \(
\boldsymbol{A}=\left( \begin{matrix}
	0&		\alpha _3&		-\alpha _2\\
	-\alpha _3&		0&		\alpha _1\\
	\alpha _2&		-\alpha _1&		0\\
\end{matrix} \right) 
\), and \(\boldsymbol{B}=\boldsymbol{C}-1/2\boldsymbol{A}\boldsymbol{A}^t\), where \(\boldsymbol{C}\) is also a antisymmetric matrix.

The movements of frame in time \(t\) and arc-length \(s\) are descirbed by the second-order antisymmetric tensor \(\boldsymbol{K}\) and \(\boldsymbol{W}\) respectively, the perturbation of these two tensors can also be calculated. Take the movement of the frame in time as an example:

$$
\dot{\boldsymbol{d}}=\boldsymbol{Wd}
$$

Expand \(\boldsymbol{d}\) and \(\boldsymbol{W}\):

$$
\left( \boldsymbol{I}+\varepsilon \boldsymbol{A}+\varepsilon ^2\boldsymbol{B} \right) \boldsymbol{W}^{(0)}\boldsymbol{d}+\left( \varepsilon \dot{\boldsymbol{A}}+\varepsilon ^2\dot{\boldsymbol{B}} \right) \boldsymbol{d}=\left( \boldsymbol{W}^{(0)}+\boldsymbol{W}^{(1)}\varepsilon +\boldsymbol{W}^{(2)}\varepsilon ^2 \right) \left( \boldsymbol{I}+\varepsilon \boldsymbol{A}+\varepsilon ^2\boldsymbol{B} \right) \boldsymbol{d}
$$

By comparing the coefficients of both sides, the perturbation components of \(\boldsymbol{W}\) can be written as:

$$
\boldsymbol{W}^{(1)}=\frac{\partial \boldsymbol{A}}{\partial t}+\boldsymbol{AW}^{(0)}-\boldsymbol{W}^{(0)}\boldsymbol{A}
$$

$$
\boldsymbol{W}^{(2)}=\frac{\partial \boldsymbol{B}}{\partial t}+\boldsymbol{BW}^{(0)}-\boldsymbol{W}^{(0)}\boldsymbol{B}-\boldsymbol{AW}^{(1)}
$$

Similarly, the perturbation components of \(\boldsymbol{K}\) read:

$$
\boldsymbol{K}^{(1)}=\frac{\partial \boldsymbol{A}}{\partial s}+\boldsymbol{AK}^{(0)}-\boldsymbol{K}^{(0)}\boldsymbol{A}
$$

$$
\boldsymbol{K}^{(2)}=\frac{\partial \boldsymbol{B}}{\partial s}+\boldsymbol{BK}^{(0)}-\boldsymbol{K}^{(0)}\boldsymbol{B}-\boldsymbol{AK}^{(1)}
$$

Now we consider the perturbation of Kirchhoff equations in next section.

## Kirchhoff rod
The control equation of Kirchhoff rod can be written as:

$$
\begin{cases}
	\left( \boldsymbol{F} \right) _{ss}=\rho A\ddot{\boldsymbol{d}}_3\\
	\left( \boldsymbol{M} \right) _s+\boldsymbol{d}_3\times \boldsymbol{F}=\rho \left( I_2\boldsymbol{d}_1\times \ddot{\boldsymbol{d}}_1+I_1\boldsymbol{d}_2\times \ddot{\boldsymbol{d}}_2 \right)\\
\end{cases}
$$

We expand both \(\boldsymbol{F}\) and \(\boldsymbol{M}\) in material frame:

$$
\begin{cases}
	\boldsymbol{F}=f\boldsymbol{d}, f=\left( f_1, f_2, f_3 \right)\\
	\boldsymbol{M}=m\boldsymbol{d}, m=\left( m_1, m_2, m_3 \right) =\left( EI_1\left( \kappa _1-\bar{\kappa}_1 \right) , EI_2\left( \kappa _2-\bar{\kappa}_2 \right) , GJ\left( \kappa _3-\bar{\kappa}_3 \right) \right)\\
\end{cases}
$$

The dimensionless form of the equation can be written as:




$$
\begin{cases}
	\left( \boldsymbol{F} \right) _{ss}=\ddot{\boldsymbol{d}}_3\\
	 \left( \boldsymbol{M} \right) _s+\boldsymbol{d}_3\times \boldsymbol{F}=\beta  \boldsymbol{d}_1\times \ddot{\boldsymbol{d}}_1+\alpha  \boldsymbol{d}_2\times \ddot{\boldsymbol{d}}_2\\
\end{cases}
\\
\begin{cases}
	\boldsymbol{F}=f\boldsymbol{d},f=\left( f_1,f_2,f_3 \right)\\
	\boldsymbol{M}=m\boldsymbol{d},m=\left( m_1,m_2,m_3 \right) =\left( \alpha \left( \kappa _1-\bar{\kappa}_1 \right) ,\beta \left( \kappa _2-\bar{\kappa}_2 \right) ,\gamma \left( \kappa _3-\bar{\kappa}_3 \right) \right)\\
\end{cases}
$$

where

$$
\begin{cases}
	\boldsymbol{F}\rightarrow \boldsymbol{F}AE, \boldsymbol{M}\rightarrow \boldsymbol{M}E\sqrt{AJ}\\
	EI_1\rightarrow \alpha EJ, EI_2\rightarrow \beta EJ, G=\gamma E\\
	s\rightarrow s\sqrt{J/A}, t\rightarrow t\sqrt{J\rho /AE}\\
\end{cases}
$$

Note that \(\left( \boldsymbol{d} \right) _s=\boldsymbol{Kd}, \dot{\boldsymbol{d}}=\boldsymbol{Wd}\), the control equation can be simplified as:

$$
\begin{cases}
	\left( \left( f_s+f\boldsymbol{K} \right) _s+\left( f_s+f\boldsymbol{K} \right) \boldsymbol{K} \right) \boldsymbol{d}=\Delta \boldsymbol{d}\\
	\left( \gamma \left( m_s+m\boldsymbol{K} \right) +f\Lambda \right) \boldsymbol{d}=\Theta \boldsymbol{d}\\
\end{cases}
\\
\begin{cases}
	\Delta =\left( \omega _1\omega _3+\begin{matrix}
	\left( \omega _2 \right) _t&		\omega _2\omega _3-\left( \omega _1 \right) _t&		-\omega _{1}^{2}-\omega _{2}^{2}\\
\end{matrix} \right)\\
	\Theta =\left( \begin{matrix}
	\alpha  \left( \left( \omega _1 \right) _t+\omega _2\omega _3 \right)&		\beta \left( \left( \omega _2 \right) _t-\omega _1\omega _3 \right)&		\alpha  \left( \left( \omega _3 \right) _t+\omega _1\omega _2 \right) +\beta  \left( \left( \omega _3 \right) _t-\omega _1\omega _2 \right)\\
\end{matrix} \right)\\
\end{cases}  
$$

By expanding the Kirchhoff equation into first order we can derive the second-derivation of \(\{f_1, f_2, f_3, \alpha_1, \alpha_2, \alpha_3\}\), which can be used to judge the buckling modes.




## Cases study
### First case
We consider the first case: the twist buckling of a planar ring.
Firstly we should slove the static configuration and then perturbate based on this basic mode. Kirchhoff equation can be expressed as:

$$
\begin{cases}
	\left( f_1 \right) _s=f_2\kappa_3-f_3\kappa_2\\
	\left( f_2 \right) _s=f_3\kappa_1-f_1\kappa_3\\
	\left( f_3 \right) _s=f_1\kappa_2-f_2\kappa_1\\
	\left( \alpha (\kappa_1-\bar{\kappa}_1) \right) _s=\beta  (\kappa_2-\bar{\kappa}_2)\kappa _3-\gamma (\kappa_3-\bar{\kappa}_3)\kappa _2+F_2\\
	\left( \beta  (\kappa_2-\bar{\kappa}_2) \right) _s=\gamma (\kappa_3-\bar{\kappa}_3)\kappa _1-\alpha  (\kappa_1-\bar{\kappa}_1)\kappa _3-F_1\\
	\left( \gamma (\kappa_3-\bar{\kappa}_3) \right) _s=\alpha (\kappa_1-\bar{\kappa}_1)\kappa _2-\beta (\kappa_2-\bar{\kappa}_2)\kappa _1\\
\end{cases}
$$

The geometry of static solution is a ring (must be isotropic cross section) with twist \(\tau\) and the material strain can be written as: \(\kappa_3=\tau_0, \bar{\kappa}_3=\bar{\kappa}_1=\bar{\kappa}_2=0,\alpha=\beta\).

Finally, it reads:

$$
\begin{cases}
	f_1=\gamma \tau_0 \kappa _0\sin \left( \tau_0 s \right) , f_2=\gamma \tau_0 \kappa _0\cos \left( \tau_0 s \right) , f_3=0\\
	\kappa _1=\kappa _0\sin \left( \tau_0 s \right) , \kappa _2=\kappa _0\cos \left( \tau_0 s \right) , \kappa _3=\tau_0\\
\end{cases}
$$

Simplify the perturbation format, the 

$$
\left(
\begin{array}{cccccc}
 2 i \gamma  \kappa_0^3 n \tau_0  & \sigma ^2 & \gamma  \kappa_0^3 \left(n^2+1\right) \tau_0  & -\kappa_0^2 \left(n^2+1\right) & 0 & 2 i \kappa_0^2 n \\
 \sigma ^2 & 0 & 0 & 0 & \kappa_0^2 n^2 & 0 \\
 -\gamma  \kappa_0^3 \left(n^2+1\right) \tau_0  & 0 & 2 i \gamma  \kappa_0^3 n \tau_0  & -2 i \kappa_0^2 n & 0 & -\kappa_0^2 \left(n^2+1\right) \\
 -\alpha  \sigma ^2-\kappa_0^2 \left(-\beta +\gamma +\alpha  n^2\right) & -i \kappa_0 n \tau_0  (\alpha -\beta +\gamma ) & i \kappa_0^2 n (\alpha -\beta +\gamma ) & 0 & 1 & 0 \\
 i \kappa_0 n \tau_0  (\alpha -\beta -\gamma ) & \beta  \left(\kappa_0^2 n^2+\sigma ^2\right) & \kappa_0 \tau_0  (2 \alpha -2 \beta -\gamma ) & 1 & 0 & 0 \\
 -i \kappa_0^2 n (\alpha -\beta +\gamma ) & \kappa_0 \tau_0  (\alpha -\beta ) & -\left(\sigma ^2 (\alpha +\beta )\right)-\kappa_0^2 \left(\alpha -\beta +\gamma  n^2\right) & 0 & 0 & 0 \\
\end{array}
\right)
$$
