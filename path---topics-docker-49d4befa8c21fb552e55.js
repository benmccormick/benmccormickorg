webpackJsonp([0x6059cac156c8],{886:function(e,a){e.exports={pathContext:{posts:[{node:{frontmatter:{readNext:null,topics:["Docker"],category:"tools",key:"docker-cow",title:"The Mystery Of Docker And The Disk-Eating Cow",description:"Tracking down how Docker ate half my hard drive",layout:"post",path:"/2017/03/28/the-mystery-of-docker-and-the-disk-eating-cow/",date:"2017-03-28T14:40:00+00:00",dontfeature:null,isDraft:null},html:'<p>Yesterday morning I was innocently minding my own business, downloading some files, when I noticed that nearly all the disk space on my 256GB work laptop had been consumed.  This seemed rather unlikely to me, given that I’d only had the laptop for about a year and I didn’t store anything other than code and work documents on it.  Text files just don’t take up that much space most of the time.  So I decided to make a purchase I’d considered for a while, bought <a href="https://daisydiskapp.com/">Daisy Disk</a>, and began investigating.</p>\n<p>The first thing I noticed was a huge amount of the disk space (about half) was taken up by the <code>~/Library/Containers</code> folder. That folder contained my email history and also data on my <a href="https://www.docker.com/">Docker</a> containers. Docker functions as a lightweight VM, and essentially holds copies of virtualized operating systems and file systems inside each docker container and image, so it made sense to me that it could be taking up a lot of space, though >120GB still seemed wrong for my paltry 4 containers.  So my first step was to delete all of the containers and images on my laptop.  That cleared about 20GB of space but still left my drive looking like this:</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/daisy-738d6393507d403118839c48ca17b0da-c0d7a.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 75.02668089647813%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsrAAALLwGbQGAnAAACxUlEQVQ4y42T3UtTYRzH95cMROfOOc85O2fnZTvb2aY559ILp+JAkWAENUFEm0MDDYuiLiwt6O1CDCrJIC3oqqKLrryzlxsXYheBF7FCD2kvuHO+PZvzJRH14sPz/v19n9/zexxhWV3Wwuo6IyhrHjVq1iZHzLqOUTPUkjWVQNTUwzHTIwdNNyebDFFKsLxqcoJGUUt9yiod/+F4dcFBeOUHETXQSYoGIuqUwBYeH+jG8toWVBCyGoI/WFfCp9dCkoPQjXqo/pplh5soeZaUNlusoNluItsuxmNXMYLtYiWbCpSg6zv97fE2dFwoBqbtkoMpCtLIbkayXVUEoqQjGGpFsuMsGhoTNJACIvhKzva63Ie1K8ir+WpGRM2ptN08OoFk5jbSmTlc717Bg9QnGFoDnG4Cjtd2BPamoBxgV5Dl5LysGOicmrMvf1/G+OoY+t7PovfDRwzOvEQ80IzWWNuBQgcKEupQ4XVcnB6wpwtXceF3Fsm/96HlzmPsxj3Mt95Fqr4TLs57PEGO5tAvhTD5rsd+UuhD7+YETuTGIfJ+pCoTaJcb4WQFlB/u6CtzvJLXeAMTz7vtZxjC4MYoEmuTCL8egTDcBWeFQMunuJke5JWjHdKCzutMEGcy7fabzWHc+pXBufUrSGESPYWbiKbjqHCK4Dxld+QIQReR86pHR1yN2pcen8ZbjOCRlcWdjX5MIYunG4OIttSi0uWlRX6wy/9fmebQTTc2SDV21FeHgWtdeLjQj9mVIcwsDWD8RRptbU2odstghWM8CsPJ34pXoT+kEPQErQgbspqMmJVoilstsZNWgA9bERKyeEGzigfplUvtPjbZrTr97OC9xk9RjUCgP4R4dYhKEKpkQBfDMLwRSHSeoc6KDg6DePxFwa8OQQnNC0p4iRf9i1Q0V4ST/Dm2DP1JOZqWHHM4i5QvDJFf/QPWcAdwJd9f1AAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="daisy disk showing 100+GB of docker" title="" src="/static/daisy-738d6393507d403118839c48ca17b0da-d766e.png" srcset="/static/daisy-738d6393507d403118839c48ca17b0da-a6b6e.png 143w,\n/static/daisy-738d6393507d403118839c48ca17b0da-8e488.png 285w,\n/static/daisy-738d6393507d403118839c48ca17b0da-d766e.png 570w,\n/static/daisy-738d6393507d403118839c48ca17b0da-13239.png 855w,\n/static/daisy-738d6393507d403118839c48ca17b0da-c0d7a.png 937w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>At this point, I was annoyed.  103.5 GB was taken up by some folder called Docker.qcow2 and Daisy Disk wouldn’t show me what was inside.  So I drilled in on the file system and immediately found out that Docker.qcow2 was not a directory like I’d assumed due to size, but a single 100+GB file.  At that point I decided to poll my teammates to see if I was the only one dealing with this:</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/slack-eafd4ae8771dc7dea9d49817f530f12f-3e5d8.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 112.92613636363636%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAADdUlEQVQ4y5VVW4scRRjtPy76ICL4HyQP+iD4pgiJBgyGVR+MWQLZldmdS9+7q++36svMnJyvemacnWwiFhyqqqv6u57vKyvPFNbrNVzXwzRN2O122G63BrI/zjvO+/3+PciQc6012raF1bUKSgVI0wxlWaKuazRNYw7btkPXEVxPg8aHhijt+97ctd7+fY3n33+HIAyxsW3YjoO8KNBR40jNgmEa0ckPujPfBZp7bb7x3jiehFtNVUNFCoEXYLPawN04cNbzbC8ZipWNxKYHQYQyy1HnBeqiNKjS3HgzHARKCKyj5CZIUK4DVHaIyonQZSV0WnKu0KcVhrzGUDQzqnYGz7Dbn4QZC7f7HTRdUkmFnBeKvEGStyj6Cd20wx4fH5fn1uKvN/jhqycI08RkOowi9MPIzM2Z3jPreyrFMavnGT7Mwoz5Hl3WdCW83SDPE/ieg8B3kagIVZkjSxXSJEZZZGjqEm1Toa4KM8u+5J2urTGSAUPfGcGnGGaJgmOvEQYeXMem+4mBCFVxiCj0Sa1ZgXwXoaK01y2204Bp7I2VJ4FxFBgL5XJkhG6MkCNEmVgv9wLfM1bL3SJPT7OxsCDnVsslirJAHEeIohBFIXSosN1JpUj1CLZmlv3EJI7jQPRmnsx6mGP4x9Xv+PLzL1CSIplKkcYpmrQwdNFEG6ToYsYqIYUYb62KQyKYkAN2h4SYLJ946Ci0UY42zMlF8pA/mj2FtT5jpjhHmYEo0lSgD0pF4XaYZoEuG8NvT58h9kOEGxf2YonYDaA7jYm0OeebsUiockbky2HdL238+NOvKH2FPFDMtjSJmiXGLFJzQ0ulcipPoVwFKJc+KpdreiHhGBttqmZs+4elJ251HhEXLMMUdUg4Mca6m8EfH6L794yYuoPALQtbk6Su7+Oe2VZJQq6lqKQBsG1Jt/k/w8rIsTdXL+AFAUvPxTAMpuQkao811P+CdfXyJT775FOolC5WbA7k5bFzP9oM9h9vF1bFLm1vNkjopnTsikKlxx0hXfi4Pgq7fALOlVj2ao0XT3/BmkJvbm7x+vU1bm//YdWwZvO5gcp7IS3+Mesuv1nXr67x7dffmIdqsVjg7u4OIZ8DeWOO1p7//Ngj9cDC+5sb/PnzM0S0SJLieR6tIx+zjGFg0RelCUXG9i8KZC0Q66VnXgp8BzOH5lEYitbZAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="daisy disk showing 100+GB of docker" title="" src="/static/slack-eafd4ae8771dc7dea9d49817f530f12f-d766e.png" srcset="/static/slack-eafd4ae8771dc7dea9d49817f530f12f-a6b6e.png 143w,\n/static/slack-eafd4ae8771dc7dea9d49817f530f12f-8e488.png 285w,\n/static/slack-eafd4ae8771dc7dea9d49817f530f12f-d766e.png 570w,\n/static/slack-eafd4ae8771dc7dea9d49817f530f12f-3e5d8.png 704w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>So between the 5 of us, we each had “cow files” taking up between 23 and 103GB of disk space. Some Googling revealed a <a href="https://github.com/docker/for-mac/issues/371">github thread</a> that showed this is a so far unsolved issue with Docker For Mac.  Summary: qcow2 files are a format for saving disk images.  Docker For Mac’s implementation works well for writing and updating images, but doesn’t automatically free up disk space when a container or image is deleted. So as you use and delete containers over time this file gradually grows.  I have a habit of deleting and recreating containers when I’m trying to debug something, which explains why I had a much larger file than others.  There isn’t currently a true fix for this issue, but you can delete the file.  You’ll lose all your containers and images, but when you recreate them the file will be small again.  There also is supposed to be some automatic limiting of the file.  The current cap is 64GB, but there is work on making it configurable.  Unfortunately the current cap is not respected if you had previously used docker-machine to control docker on your machine, which is how my file exceeded the cap.  I’m also unclear on what happens when the file hits the cap.  I get the impression that things stop working and you need to delete everything anyway (you just avoid running out of disk space on the host machine).</p>\n<p>Fortunately it was no problem for me to delete everything, and so I was able to clear things out, at which point my disk looked a lot happier:</p>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/daisy2-22b1203e29be4211209bdd1c97f9bc85-c9a27.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.04534005037783%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsRAAALEwFNUj0TAAACC0lEQVQoz4VSS2sTURSerbtiTKaT1oRJZjIzMfN+5NV0OsMQaxTjolBQWyqFUlEULBV80I0LwT+gGxf+AF27qntBVy679g/oUvg896aTJmBxcTj33PPd73znnCuY1S6ayxHUogVTHyG5eYR0fIRe9hiBk6ETDmGqPShFBw3Rg1py0Sh5MMohmksh95rkQ5cCbgIDcBCBG6IL5ZKJOplCBZSSQ2d7SjYlLHuIjBS+GsNTVtGqdBBqCUI9gTALrF50iJBIC0RUsCEvtOh+hog8IzerPWSdMXqtjKuqETYyEiTB9QlhveiSfB9Xg1W03T4G8TrWt+5gc3MHTj2iImcKmWpb6mLNH8FVVnjMitlyD31rCEEjkEyKXmzcwsmHJ/j68SHeH+/j4Ns7PD/5hfHt1zQzG6p4qpAeO0tthHIMoxRyU0kQa5spFvJ2Njopvr99APx8huM/B7iHl9j9/Rn90VM0Cz4MKeI4RmhRm4k1QreRwbo8WVjQiLnq6QyXFyxcWfRw/9ENjH5sw/8yxN6nQ7y59gpb9jb0cnA6Rxea6MOvxojkFG5lwNt26wO0m+nZlrVFNnAX5QsWdDmAr63hbmUHh609dGsrXFlePF9ObrPx3JaZ1yWKix4s+p+1sgmpoKPGHtG22Ry5AHGeXJ0pJswlxMmnzbfJzjq1N8l509y/LCcVzkucF//P/gKUr1wRzwBSagAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="daisy disk showing 100+GB of docker" title="" src="/static/daisy2-22b1203e29be4211209bdd1c97f9bc85-d766e.png" srcset="/static/daisy2-22b1203e29be4211209bdd1c97f9bc85-a6b6e.png 143w,\n/static/daisy2-22b1203e29be4211209bdd1c97f9bc85-8e488.png 285w,\n/static/daisy2-22b1203e29be4211209bdd1c97f9bc85-d766e.png 570w,\n/static/daisy2-22b1203e29be4211209bdd1c97f9bc85-c9a27.png 794w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Lessons Learned</h3>\n<p>I had 3 takeaways from this interesting adventure.</p>\n<ol>\n<li>If you’re using Docker For Mac, keep an eye on your disk space.  If you’re able to occasionally delete and recreate your containers without data loss, consider occasionally doing that and deleting the cow file.  If you can’t do that, be careful how many containers you add and delete, and make sure you manage your disk space well.</li>\n<li><a href="https://daisydiskapp.com/">Daisy Disk</a> is awesome and highly recommended.  It’s an example of a rare breed: the beautiful system utility. The visualizations it shows are both pretty and useful; it made diagnosing this issue a breeze.  </li>\n<li>One more thing I learned from my coworkers slack yesterday: <code>ls</code> takes an <code>-h</code> argument that shows file sizes in KBs/MBs/GBs instead of all in bytes.  This is super helpful when examining large files.  Compare the 2 lists of files from my Downloads folder in the image below. The normal form is very nice for comparing 2 files side by side and seeing which one is bigger, but the second form is much more helpful when you want to get an idea of exactly how big something is, or communicate it to others.  Most of us don’t think about file sizes in terms of bytes anymore.</li>\n</ol>\n<p>\n  <a class="gatsby-resp-image-link" href="/static/downloads-444921e84047cde23158b43eab28f35a-b1f7d.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 59.285714285714285%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB4klEQVQoz1VSaXqrMBDj/jd7zR4IEDAGswQIWS8gv9EU0vbHfDbGljTSBEnRIrKDT2yPfrzhfr9hut1wk5qmiaufC7/r8Xj41+vln8+nl728u3spBMbkKMvSu7pGUVipAmmaYhwHmDzH8XiEtRauqhDHMZIkwSmKkGUZKjlzzikxCUgU5PJIQHxdO1gBM8bow3EcUQvJbrcD75A4DEMli6JQ9yQfhl4VU6kq5GVRoIBFYRQwSWJcLhfsBWy9XiM7n5WEaqnscDhgtVrJPv8AiwA/DAOCNE2QZ5mnfF6mAj7kT+43my1SaZMkBIqik5xt8PX1T79pR9M0aNvWd12HoLAlbOl807RopMWqcnqJvvR9L+2aj1c8p8/qX1lqF3M4WMIJzrZFXI0+rQZ0/VX8mHC9arqyXgnsCf67+Pj9fvvFt7m+QyGbkVBsKS2LGnrKJJum1pbO4p9MAU6nk/h11JVn9G1JmIAcrU8omrL7DmUBFE/kcaR78ViBGMx+v1dgktDneSZ/FC6AZCvMDyANXkAYDtc4TjQQglLldrtVf+m1gP9VOAN6+fYEdK7yh8Ne05VJ8ALOUhCey7hwMjzTlZS9gP4B1CHmYPObirquRTKrW8YpDKN57owmTAAJRlue28Z/8Txip7RVHe4AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="daisy disk showing 100+GB of docker" title="" src="/static/downloads-444921e84047cde23158b43eab28f35a-d766e.png" srcset="/static/downloads-444921e84047cde23158b43eab28f35a-a6b6e.png 143w,\n/static/downloads-444921e84047cde23158b43eab28f35a-8e488.png 285w,\n/static/downloads-444921e84047cde23158b43eab28f35a-d766e.png 570w,\n/static/downloads-444921e84047cde23158b43eab28f35a-b1f7d.png 700w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    </p>',fields:{slug:"/2017/03/28/the-mystery-of-docker-and-the-disk-eating-cow/"}}}],topic:"Docker"}}}});
//# sourceMappingURL=path---topics-docker-49d4befa8c21fb552e55.js.map