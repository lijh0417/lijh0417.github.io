---
title: "如何理解用于BVP的COCO"
date: 2025-12-08
tags:
- Mathematics
lang: zh
ref: how-to-understand-coco-for-bvp
permalink: /zh/2025/12/how-to-understand-coco-for-bvp/
---

本篇笔记介绍了COCO用于BVP的基本用法。

<!-- more -->

首先，我们需要加载工具箱：

```matlab
coco_use_recipes_toolbox coll_v1 bvp_v1
```

然后需要编写coll_args：

```matlab
coll_args={@ODE, t0, x0, {'par1','par2','...'},[par10,par20,...]}
```

BVP参数也需要编写：

```matlab
bvp_args=[coll_args, {@BC,@BC_JAC}]
```

问题定义如下：

```matlab
prob=bvp_isol2seg(coco_prob(),'',bvp_args{:});
```

需要设置的参数：

```matlab
prob = coco_set(prob, 'cont', 'NAdapt', 20, 'ItMX', 1000, 'NPR',0.4);
prob = coco_set(prob, 'corr', 'LogLevel',0,'NGrid',10000);
```

运行代码：

```matlab
bd1=coco(prob,runName,[],1,{'par1'},[p10,p11])
```
