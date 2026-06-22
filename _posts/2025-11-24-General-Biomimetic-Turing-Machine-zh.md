---
title: "广义仿生图灵机"
date: 2025-11-24
tags:
  - Rod
  - Inverse design
lang: zh
ref: general-biomimetic-turing-machine
permalink: /zh/2025/11/general-biomimetic-turing-machine/
---

本篇笔记介绍了基于[仿生图灵机](../files/A_00-Biomimetic Turing machine A multiscale theoretical framework for the inverse design of target space curves.pdf)的广义理论。
<!-- more -->

![](/assets/images/2025-11-24-General-Biomimetic-Turing-Machine/BTM.png)

我们考虑一种可变形细长剪纸带以实现共形变形。主曲率标架的运动方程可以写为：

$$
\partial_s\left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_2\\
	\mathbf{n}\\
\end{array} \right)=\left( \begin{matrix}
0&		-(\theta'+\phi')&		(\kappa_2-\kappa_1)\sin\theta\cos\theta\\
\theta'+\phi'&		0&		-\kappa_1\sin^2\theta-\kappa_2\cos^2\theta\\
(\kappa_1-\kappa_2)\sin\theta\cos\theta&		\kappa_1\sin^2\theta+\kappa_2\cos^2\theta&		0\\
\end{matrix} \right)\left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_2\\
	\mathbf{n}\\
\end{array} \right)
$$

扭曲Frenet标架的运动方程可以写为：

$$
\partial_s\left( \begin{array}{c}
	\mathbf{B}_1\\
	\mathbf{T}\\
	\mathbf{N}_1\\
\end{array} \right)=\left( \begin{matrix}
0&		-\kappa\sin\varphi&		\varphi'-\tau\\
\kappa\sin\varphi&		0&		\kappa\cos\varphi\\
\tau-\varphi'&		-\kappa\cos\varphi&		0\\
\end{matrix} \right)\left( \begin{array}{c}
	\mathbf{B}_1\\
	\mathbf{T}\\
	\mathbf{N}_1\\
\end{array} \right)
$$

我们也可以将带的运动表示为材料应变：

$$
\partial_s\left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_2\\
	\mathbf{d}_3\\
\end{array} \right)=\left( \begin{matrix}
0&		m&		m_1\\
-m&		0&		m_2\\
-m_1&		-m_2&		0\\
\end{matrix} \right)\left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_2\\
	\mathbf{d}_3\\
\end{array} \right)
$$

最终我们得到逆向设计的方程：

$$
\begin{cases}
(\kappa_2-\kappa_1)\sin\theta\cos\theta=m_1\\
\kappa_1\sin^2\theta+\kappa_2\cos^2\theta=m_2\\
\phi'=-m-\theta'
\end{cases}
$$

当 $\kappa_2=-\kappa_1$ 时，我们有：

$$
\begin{cases}
\phi'=-m-\theta' \\
\tan2\theta=-\frac{m_1}{m_2}\\
\kappa_1=\frac{m_2}{\cos2\theta}
\end{cases}
$$
