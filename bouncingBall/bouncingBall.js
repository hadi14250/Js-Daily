function bouncingBall(h,  bounce,  window) {
    if (h <= 0 ||  bounce <= 0 || bounce >= 1 || window >= h) return (-1);
    let i = 0;
    while(h > window)
    {
        i++;
        h *= bounce;
        if (h > window) i++;
    }
    return (i);
  }


  console.log(bouncingBall(3,  0.66, 1.5))
//   console.log(bouncingBall(3,  1, 1.5))