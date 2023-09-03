---
title: VASP计算Bader电荷方法
date: 2022-07-30 22:05:29
tags:
- DFT
- VASP 
---
## 什么是Bader电荷？

一个分子中，电荷在分子所占据的空间中并不是均匀分布的。在每两个原子之间，电荷密度分布不均匀同时越是靠近原子，电荷密度会显著提高。因此，两个较大的数值之间存在一个极小值，这个极小值就是把原子分开的界限。一个原子周围的极小值点会形成一个封闭的区域这个区域可以用来划分分子中的原子，这个区域中的电荷综合就是Bader电荷。（VASP中使用赝势，因此所计算的电荷总和是当前化学环境中的所有“价层”电子总和）

<!--more-->
## Bader电荷计算

​		[Bader](http://theory.cm.utexas.edu/henkelman/code/bader/)是用于计算Bader的软件，读入文件有两种：

1 VASP CHGCAR文件；

2 Gaussian CUBE文件 软件会自己识别文件格式，不需要手动指定。

用法

```
Bader filename
```

选项如下表：

|                选项                |                     含义                     |
| :--------------------------------: | :------------------------------------------: |
|        -c bader \| voronoi         |       开启bader计算/Voronoi多面体计算        |
|        -n bader \| voronoi         |       关闭bader计算/Voronoi多面体计算        |
|  -b neargrid \| ongrid \| weight   |            三种Bader网格划分算法             |
|       -r refine_edge_method        | 默认-1一般使用-1（新算法 高效；旧算法为-2）  |
|     **-ref reference_charge**      |  参考电荷（推荐-ref file(AECCAR0+AECCAR2)）  |
| -vac off \| auto \| vacuum_density | 默认指定低密度点给真空层（1e-3/A^3判断标准） |
|      -p all_atom \| all_bader      |                   输出选项                   |
|      -p sel_atom \| sel_bader      |               输出选项（选择）               |
|      -p sum_atom \| sum_bader      |               输出选项（求和）               |
|    -p atom_index \| bader_index    |               输出选项（指标）               |
|         -i cube \| chgcar          |         默认会自己判断，一般不设置！         |
|                -cp                 |                  选择关键点                  |
|                 -h                 |                     帮助                     |
|                 -v                 |                   冗余输出                   |

输出文件：

| 文件名  |                  内容                   |
| :-----: | :-------------------------------------: |
| ACF.dat | 坐标 电荷 到表面（内层）的最小距离 体积 |
| BCF.dat |  坐标 电荷 最近的原子 离最近原子的距离  |
| AVF.dat |                  体积                   |

**粗莽做法：**

不考虑内层电子，采用赝势的内层电子数（一般来说内层电子变化不大）

```
bader CHGCAR
```

**官方建议做法：**

考虑内层电子，考虑全电子状态

```
LAECHG =.TRUE.
LCHARG = .TRUE.
NSW    = 0
```

```
chgsum.pl AECCAR0 AECCAR2
bader CHGCAR -ref CHGCAR_sum
```

