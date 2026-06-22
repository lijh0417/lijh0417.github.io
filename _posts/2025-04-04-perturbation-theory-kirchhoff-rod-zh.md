---
title: "基尔霍夫杆的不稳定性"
date: 2025-04-04
tags:
  - Geometric Elasticity
  - Rod
lang: zh
ref: perturbation-theory-kirchhoff-rod
permalink: /zh/2025/04/perturbation-theory-kirchhoff-rod/
---

本文介绍了框架摄动法在分析基尔霍夫杆不稳定性中的基本理论。
<!-- more -->

## 基本方程

在本节中，我们回顾基尔霍夫杆的基本方程，并基于正交性推导局部框架的基本摄动格式，为下一节的不稳定性分析奠定基础。

考虑局部框架可以展开为：

$$
\mathbf{d}=\left( \mathbf{I}+\varepsilon \mathbf{A}+\varepsilon ^2\mathbf{B} \right) \left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_2\\
	\mathbf{d}_3\\
\end{array} \right) 
$$

由于正交性，$ \mathbf{d} $ 满足 $\mathbf{d}\cdot\mathbf{d}^t=\mathbf{I}$，可得：

$$
\left( \mathbf{I}+\varepsilon \mathbf{A}+\varepsilon ^2\mathbf{B} \right) \left( \mathbf{I}+\varepsilon \mathbf{A}^t+\varepsilon ^2\mathbf{B}^t \right) =\mathbf{I}+\varepsilon \left( \mathbf{A}+\mathbf{A}^t \right) +\varepsilon ^2\left( \mathbf{B}+\mathbf{B}^t+\mathbf{AA}^t \right) 
$$

$$
\mathbf{A}=\left( \begin{matrix}
	0&		\alpha _3&		-\alpha _2\\
	-\alpha _3&		0&		\alpha _1\\
	\alpha _2&		-\alpha _1&		0\\
\end{matrix} \right) 
$$

因此 $\mathbf{A}$ 是反对称矩阵，$\mathbf{B}=\mathbf{C}-1/2\mathbf{A}\mathbf{A}^t$，其中 $\mathbf{C}$ 也是反对称矩阵。框架在时间 $t$ 和弧长 $s$ 上的运动分别由二阶反对称张量 $\mathbf{K}$ 和 $\mathbf{W}$ 描述，这两个张量的摄动也可以计算。以框架在时间上的运动为例：

$$
\dot{\mathbf{d}}=\mathbf{Wd}
$$

展开 $\mathbf{d}$ 和 $\mathbf{W}$：

$$
\left( \mathbf{I}+\varepsilon \mathbf{A}+\varepsilon ^2\mathbf{B} \right) \mathbf{W}^{(0)}\mathbf{d}+\left( \varepsilon \dot{\mathbf{A}}+\varepsilon ^2\dot{\mathbf{B}} \right) \mathbf{d}=\left( \mathbf{W}^{(0)}+\mathbf{W}^{(1)}\varepsilon +\mathbf{W}^{(2)}\varepsilon ^2 \right) \left( \mathbf{I}+\varepsilon \mathbf{A}+\varepsilon ^2\mathbf{B} \right) \mathbf{d}
$$

通过比较两边的系数，$\mathbf{W}$ 的摄动分量可以写为：

$$
\mathbf{W}^{(1)}=\frac{\partial \mathbf{A}}{\partial t}+\mathbf{AW}^{(0)}-\mathbf{W}^{(0)}\mathbf{A}
$$

$$
\mathbf{W}^{(2)}=\frac{\partial \mathbf{B}}{\partial t}+\mathbf{BW}^{(0)}-\mathbf{W}^{(0)}\mathbf{B}-\mathbf{AW}^{(1)}
$$

类似地，$\mathbf{K}$ 的摄动分量为：

$$
\mathbf{K}^{(1)}=\frac{\partial \mathbf{A}}{\partial s}+\mathbf{AK}^{(0)}-\mathbf{K}^{(0)}\mathbf{A}
$$

$$
\mathbf{K}^{(2)}=\frac{\partial \mathbf{B}}{\partial s}+\mathbf{BK}^{(0)}-\mathbf{K}^{(0)}\mathbf{B}-\mathbf{AK}^{(1)}
$$

现在我们在下一节中考虑基尔霍夫方程的摄动。

## 基尔霍夫杆

基尔霍夫杆的控制方程可以写为：

$$
\begin{cases}
	\left( \mathbf{F} \right) _{ss}=\rho A\ddot{\mathbf{d}}_3\\
	\left( \mathbf{M} \right) _s+\mathbf{d}_3\times \mathbf{F}=\rho \left( I_2\mathbf{d}_1\times \ddot{\mathbf{d}}_1+I_1\mathbf{d}_2\times \ddot{\mathbf{d}}_2 \right)\\
\end{cases}
$$

我们在材料框架中展开 $\mathbf{F}$ 和 $\mathbf{M}$：

$$
\begin{cases}
	\mathbf{F}=f\mathbf{d}, f=\left( f_1, f_2, f_3 \right)\\
	\mathbf{M}=m\mathbf{d}, m=\left( m_1, m_2, m_3 \right) =\left( EI_1\left( \kappa _1-\bar{\kappa}_1 \right) , EI_2\left( \kappa _2-\bar{\kappa}_2 \right) , GJ\left( \kappa _3-\bar{\kappa}_3 \right) \right)\\
\end{cases}
$$

方程的无量纲形式可以写为：



$$
\begin{cases}
	\left( \mathbf{F} \right) _{ss}=\ddot{\mathbf{d}}_3\\
	 \left( \mathbf{M} \right) _s+\mathbf{d}_3\times \mathbf{F}=\beta  \mathbf{d}_1\times \ddot{\mathbf{d}}_1+\alpha  \mathbf{d}_2\times \ddot{\mathbf{d}}_2\\
\end{cases}
\\
\begin{cases}
	\mathbf{F}=f\mathbf{d},f=\left( f_1,f_2,f_3 \right)\\
	\mathbf{M}=m\mathbf{d},m=\left( m_1,m_2,m_3 \right) =\left( \alpha \left( \kappa _1-\bar{\kappa}_1 \right) ,\beta \left( \kappa _2-\bar{\kappa}_2 \right) ,\gamma \left( \kappa _3-\bar{\kappa}_3 \right) \right)\\
\end{cases}
$$

其中

$$
\begin{cases}
	\mathbf{F}\rightarrow \mathbf{F}AE, \mathbf{M}\rightarrow \mathbf{M}E\sqrt{AJ}\\
	EI_1\rightarrow \alpha EJ, EI_2\rightarrow \beta EJ, G=\gamma E\\
	s\rightarrow s\sqrt{J/A}, t\rightarrow t\sqrt{J\rho /AE}\\
\end{cases}
$$

注意 $\left( \mathbf{d} \right) _s=\mathbf{Kd}, \dot{\mathbf{d}}=\mathbf{Wd}$，控制方程可以简化为：

$$
\begin{cases}
	\left( \left( f_s+f\mathbf{K} \right) _s+\left( f_s+f\mathbf{K} \right) \mathbf{K} \right) \mathbf{d}=\Delta \mathbf{d}\\
	\left( \gamma \left( m_s+m\mathbf{K} \right) +f\Lambda \right) \mathbf{d}=\Theta \mathbf{d}\\
\end{cases}
$$

$$
\begin{cases}
	\Delta =\left( \omega _1\omega _3+\begin{matrix}
	\left( \omega _2 \right) _t&		\omega _2\omega _3-\left( \omega _1 \right) _t&		-\omega _{1}^{2}-\omega _{2}^{2}\\
\end{matrix} \right)\\
	\Theta =\left( \begin{matrix}
	\alpha  \left( \left( \omega _1 \right) _t+\omega _2\omega _3 \right)&		\beta \left( \left( \omega _2 \right) _t-\omega _1\omega _3 \right)&		\alpha  \left( \left( \omega _3 \right) _t+\omega _1\omega _2 \right) +\beta  \left( \left( \omega _3 \right) _t-\omega _1\omega _2 \right)\\
\end{matrix} \right)\\
\end{cases}  
$$

通过将基尔霍夫方程展开到一阶，我们可以推导出 $\{f_1, f_2, f_3, \alpha_1, \alpha_2, \alpha_3\}$ 的二阶导数，用于判断屈曲模式。

## 案例分析

### 第一种情况

我们考虑第一种情况：平面环的扭转屈曲。首先我们求解静态构型，然后基于该基本模式进行摄动。基尔霍夫方程可以表示为：

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

静态解的几何形状是一个环（必须是各向同性截面），扭转角为 $\tau$，材料应变可以写为：$\kappa_3=\tau_0, \bar{\kappa}_3=\bar{\kappa}_1=\bar{\kappa}_2=0,\alpha=\beta$。

最终得到：

$$
\begin{cases}
	f_1=\gamma \tau_0 \kappa _0\sin \left( \tau_0 s \right) , f_2=\gamma \tau_0 \kappa _0\cos \left( \tau_0 s \right) , f_3=0\\
	\kappa _1=\kappa _0\sin \left( \tau_0 s \right) , \kappa _2=\kappa _0\cos \left( \tau_0 s \right) , \kappa _3=\tau_0\\
\end{cases}
$$

简化摄动格式，

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
