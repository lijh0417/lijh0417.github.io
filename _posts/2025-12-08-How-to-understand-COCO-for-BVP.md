# How to understand COCO for BVP

First, we need to load the toolbox:

```matlab
coco_use_recipes_toolbox coll_v1 bvp_v1
```

Then we need to write the coll_args:

```matlab
coll_args={@ODE, t0, x0, {'par1','par2','...'},[par10,par20,...]}
```

The BVP args are also needed to be writen:

```matlab
bvp_args=[coll_args, {@BC,@BC_JAC}]
```

The problem is defined as follows:

```matlab
prob=bvp_isol2seg(coco_prob(),'',bvp_args{:});
```

The parameters needed to be set:

```matlab
prob = coco_set(prob, 'cont', 'NAdapt', 20, 'ItMX', 1000, 'NPR',0.4);
prob = coco_set(prob, 'corr', 'LogLevel',0,'NGrid',10000);
```

run the code:

```matlab
bd1=coco(prob,runName,[],1,{'par1'},[p10,p11])
```
