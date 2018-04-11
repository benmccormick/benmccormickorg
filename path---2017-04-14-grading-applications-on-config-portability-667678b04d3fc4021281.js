webpackJsonp([26456388035007],{723:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This week I got a new laptop, and for the first time in a while I have separate work and personal computers.  One thing that this has made clear to me is that it is still non-trivial to keep settings and configurations easily up to date between 2 different PCs.</p>\n<p>In my experience there are several levels of “portability” for applications, which are easy to think of as letter grades.</p>\n<h4>A - <em>Seamless</em></h4>\n<p>These applications have built in mechanisms for syncing configs and or data between 2 different environments.  When something is updated on one machine, it is either immediately updated on the other, or easy to pull, without having to remember to update anything or doing any previous setup.</p>\n<h4>B - <em>Easy</em></h4>\n<p>B grade applications are similar to seamless applications, but may have a few more potholes.  Possibly there is some involved setup required to get syncing working initially, or some small chunks of the application configuration don’t sync.</p>\n<h4>C - <em>Workable</em></h4>\n<p>At this point we’ve moved out of the range of easy syncing solutions.  Here it may be possible to import and export settings from a file, without any automatic syncing.  Or there may be a straightforward way to automate the setup, but no declarative representation of the config state.</p>\n<h4>D - <em>Hard</em></h4>\n<p>For some applications there is no clear way to sync or import state, but it is probably still possible through scripting if you’re willing to commit to it.</p>\n<h4>F - <em>Impossible</em></h4>\n<p>Some applications have proprietary settings that can’t be exported or scripted. There is no meaningful way to share settings for these programs.</p>\n<h2>A mixed bag</h2>\n<p>Setting up my new laptop this week, I found that the software I use a lot was all over the map on this scale.  Here are the grades:</p>\n<h4>Atom - <em>B</em></h4>\n\n  <a class="gatsby-resp-image-link" href="/static/atom-093b823a2bee7ef140badd020e6e572c-e5ca9.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 38.46153846153846%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdkRQf/EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABkQAAIDAQAAAAAAAAAAAAAAABEhAAEQYf/aAAgBAQABPyGyVHzP/9oADAMBAAIAAwAAABD33//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABcQAAMBAAAAAAAAAAAAAAAAABARIUH/2gAIAQEAAT8Qihazf//Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Atom Logo" title="" src="/static/atom-093b823a2bee7ef140badd020e6e572c-6fbc3.jpg" srcset="/static/atom-093b823a2bee7ef140badd020e6e572c-da4c7.jpg 143w,\n/static/atom-093b823a2bee7ef140badd020e6e572c-1d39e.jpg 285w,\n/static/atom-093b823a2bee7ef140badd020e6e572c-6fbc3.jpg 570w,\n/static/atom-093b823a2bee7ef140badd020e6e572c-e5ca9.jpg 650w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p><a href="https://atom.io/">Atom</a> doesn’t have native syncing persay (though most configs are in a ~/.atom folder that can possibly be synced with git).  But it has a very nice <a href="https://github.com/atom-community/sync-settings">sync-settings</a> plugin that uses gists to sync settings across multiple machines.  It loses points due to a little bit of upfront pain (when setting up a new machine you need to either create a new gist or find your old one, and you need to generate github auth keys for each instance), but gains them back with a very nice set of options to selectively restore or choose when to backup, and painless support for all of Atom’s 3rd party plugiuns</p>\n<h4>Sublime Text - <em>B+</em></h4>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/sublime-379627f9a03d1e9aa502e010930f90a7-acf54.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAADcklEQVQ4y7WU32sdRRzFbxoTRGhR7KtGBEVBQUlTrene2dnd2Z3Znd29tyapEsTS4i8kNg9R8EWsoq0GYrVN0h9WRAR98yEsBPKQpz6ICD5UEAT/AK2lrVobZszxO3tLNoH2sRcO57tz93x25rBsq3U7fnmeT5NWSUuk6lbSteuqIHWKrJ61rjMuO7MB1Fqvjo2NoSxLdDqdm6rbLfEsqUtzVuxDrN393TrjssQ4vwHMsmypKAqQXycZJ03KdWaKPK2vhSoMizsmVrk5NMHN7MtPmvEyMSrVa2Uvu7wBTNO0ckByk6Upcq1ozhAlOdqihKL5lf0MZ6YexY/v7YRZ6MO/J7fhhX0hYqVtWdbZlS1A6oAWlVEqBRP0xFRh6vlRfDX9EH7+8B5YguDzFnCWdKqFS8cHMdkNIGRmiyLfClRKuYIhpTI6lfjy8MP47aPtdXAzZH2R/DTpixb+PnEHnitDiCS1LkuMBiilrKgvRLEyE0WA6/PbatB/BLALpMUe8NrJfvx6bAe+e3MIM5O7oaSkTUhLfTtvgEmSVDpLEQppxnOO3+furHfjQOs3YA6+9NZ9mOww7GIFRkhxkoCy1vVN3gDjOK5cZ0GUmDHN6524Y7njrS82cuArnw3ghyP3YvalxyATAcoSUDlvgEKIijoAuYljgaMHH8f37+7E5U8Hep2d3tSh6/Vcq65lf94GD2mHSrpsA4yiqKIOIKLIRJHAsJfhiVGNCd3GN4fvx9W5Ptj5G9BTPb/4yWD9vx/EVskExNgKpA5oMSRgiKmJEXw7PYQL7+/Axdl+XJlt4c9j9Kp83MJfcz3g2nwfAT0wLqxMYoRh2ADpgoAx/RmZUrZx+fhAfay6w4We4I5Lu/yHgBfeuQvnXn0AieAIgtBSf1uBQRBUrru2H5qu9PDH3GAPcKb3DjrgLx9sx9dvDOH18WHEkY+nvBicBwQMLPXnvAFyzishIngsMB25F9dO9NeQn47cjbOvPYhDnREKc+waFdjjRfB9jjDw6zWSpcqcN0Df95fCMECb8TUVefbogUfsi8Vu6zFuh58Rdo8XWrrHhpzZgMRp9hut0XHpIf7yZuCq64G27TrB0+0Ye33heqHjBYjoYW6+mVzGZYnRfL4YYzO+z84z5i+Tr4S8vRKQu5nWVnzm/JZaJlGWvX1bvv7/A3BFe+3poiq8AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Sublime Logo"\n        title=""\n        src="/static/sublime-379627f9a03d1e9aa502e010930f90a7-d766e.png"\n        srcset="/static/sublime-379627f9a03d1e9aa502e010930f90a7-a6b6e.png 143w,\n/static/sublime-379627f9a03d1e9aa502e010930f90a7-8e488.png 285w,\n/static/sublime-379627f9a03d1e9aa502e010930f90a7-d766e.png 570w,\n/static/sublime-379627f9a03d1e9aa502e010930f90a7-13239.png 855w,\n/static/sublime-379627f9a03d1e9aa502e010930f90a7-acf54.png 1024w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://www.sublimetext.com/3">Sublime Text</a> saves all of its configurations as JSON, so its pretty easy to move them over.  It loses a few points though for making you figure out how to sync them, and a few more points for sticking user configs by default in the <code>~/Library/Application Support/</code> directory, where it is a bit more difficult to sync using things like git and dotfiles.  </p>\n<h4>Command Line programs - <em>A-</em></h4>\n<div class="img-group">\n  \n  <a class="gatsby-resp-image-link" href="/static/vim-ae8d50a17bcac108e0974582ab929911-a08e0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEf0lEQVQ4y6VUa0xbZRj+Ts+Yc1lgyX74ww1moiH+8zINqBg3mE63MDcIWxQwbpmjGwTcgsPKMFuhDGibma6lUBjYC71yKb23K5UWCr3fobol+kcJ8frHQQLnvJ5zmCwzk8T4JSfPey7Pc973/Z7vRWiLlU6nGYxGoygejzPx0tISkslkaMvldLkYNJnNaMJoxC0WC242W3CT2YRPuTx4WVMZhlgI+b1+lmpkBDeMjuJ6gwE3GEZxnU6Pj42NMfyREfVDUZvNjv7PCoVCD288Hg+Dc3NzecbJyUoq06pJk6mKik/brM6jBouarx4fuPVrduVZuUpZqdHqTqg1mhMKpfLkxITxeDgczqX5FG4IUuRtNFIftOr0elCr1dSlAZ1BB5pBJRxtr4FS1XFo7/n8/vBtOahUKlAoFKDVaqGvrx/EEkkrzWdfuIgzglQmTED157xIJIJIOLyWTqWIRDxO1F9uJHKbi9d3KY8QTzW9AIP9A0QmkyYWFzLroWCA5AsE0CuVnqH5rVfbWAgAkE6v2yz/GpfriMdiEIlG1oJeP/lidSm5s7+U3CEoIT8SfUb6vTNkIhknpz3TZGtbGwiEwisPqFgqmURoNhNgRFs4LUzZfL5QQ2UH0Vh0LTwzD6+xywFxD0CzlAvZSArSmTT5jcuz3sxpAuWwgktzmlprcVpjc7mmnCwaYR3yr/OufR8IBiAWixEhfwBerSoDTl8n3EtmIZFKwLTNTR48X0E8zS+GNl3jD8v+e0U096uvv2Q0kDc0g9GYcEcOcDTtP5Zdr4KQP0j3D6jdB6VcCYvJDMQSMZgcm4A3PimHJwUlsHvwGJF/uxQahs4RU7Y7J2mNIcMAC1k8dkY5bPOVVQjZqwUNb0E8ECGi0QgE5uchEAgwmVmNZmj8ohmw7iJy99C7ZF7/2+R2fgl5uLXyD+vEaBWt0aeVbGRp8W2UPOP0vXSh5dPlICUSjUSIIFV6JpMBvUID5R+fgqKOU/Acv5wsFFeQ+3jvEB9y2eCxugNuj7eA5tvNDozZkGSvC9U1NzLWuSm4qU8mEhAOhda+XcgSyiE5WVj7JkjkMvIVbiUIZCLicgeH0I1oSLVcteJ23wHKbpdoLmUfHNXX1yN/YA49ge9getnZdWNscWEBvstmVyViCeSde5k4JD5LipUyeF1Ys94lFkAtpw4cNvt9u9Px5/jY+LrVZnueqXB2dqNkn8+Hdu7KZQS7u3sc014vyKgTUHep4bc9vENwhH+WeI93Zu0g5zSoBuW/G/SGZSqrn7Ra3S9SaV92dXV1D81NpVKMBqJOB5L09mIP0n6/u6fHyO3oEK3c/Tm/UywYfqb7GOztOAxXuq467sYW92sm9XvNZnOB1WrdTzlh39/2y8nJeXRiYNu2P3aS3JAIpVxh5yjVb+xx7x8xNeNFr3czFt0Ss6pra1kf1FSzIp451j9JUV8QN1nMmNPpxFwuF+Z2uzd/wmaz/32+FRUXMzg7OYWhixvP/I5phpxeyKDCwsL/PjTFYjGDPB6P6TPjNfvWg/gvGq2SIPW4MvQAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Vim logo" title="" src="/static/vim-ae8d50a17bcac108e0974582ab929911-d766e.png" srcset="/static/vim-ae8d50a17bcac108e0974582ab929911-a6b6e.png 143w,\n/static/vim-ae8d50a17bcac108e0974582ab929911-8e488.png 285w,\n/static/vim-ae8d50a17bcac108e0974582ab929911-d766e.png 570w,\n/static/vim-ae8d50a17bcac108e0974582ab929911-a08e0.png 650w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n  \n  <a class="gatsby-resp-image-link" href="/static/fish-8e8d12e9c97d6f070368e93dd89050ff-d0ab2.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 168px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 69.64285714285714%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAAB30lEQVQoz42S227aQBCGef+naB+glSr1olLbKFJUpSFqKARMbAzEnGyD8dne48x0oAlqBBdd7Uor73wz/3j+DhoLrQAphT9tHofNyBGuB0JC0+gwtHGgJz3p9NEAna2OnD+34yeTJFDlqDVqA01r0lROfL1ek02ocs38t463h3DEN7B6DmxRYZ3A+gu2KX9SqxXUNV9MmulwQyKwwb3ehBdgW5Ym2RMCoUYpzT4V7kQMeySyI5/raAm7/iHLOcyH5XFilJq1sXLuubr5YSOPzI5fbVUJz+WfcqFnPvwgZ3PeOoq5cn3XrW/vbOiTWJEuDnxR2jS9XJmshiyUwcJkGZSpiVw5HmC+pGZJpvwbh+WWrHql8J/K+RqbFaSOnM1wN8T8AYsF1htS21Mc6Qb2czIVh7+pbJNAL1zYjnjgGPdx28fEh+JMp5ZUOlQOsE3ImpNs0zz0TBwdgtu9WQyk50l/Kp4cyFZkJarmQPJqA6pHGP/E3eQVZobtAS965MSru/dQN2gBmlwtp2rmQRJg5lPRx/0NRteweYRs2TkfABuW90kwWxWVZi/YRdc4n8XYMd53612XV18vwGfJ8OiFUAy66tcnHhu3k334WHy7+g/4RQDy/JN379XRpygVKvUHxzkhs/aBi54AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="fish logo" title="" src="/static/fish-8e8d12e9c97d6f070368e93dd89050ff-d0ab2.png" srcset="/static/fish-8e8d12e9c97d6f070368e93dd89050ff-8fa29.png 143w,\n/static/fish-8e8d12e9c97d6f070368e93dd89050ff-d0ab2.png 168w" sizes="(max-width: 168px) 100vw, 168px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<div class="img-group">\n  \n  <a class="gatsby-resp-image-link" href="/static/git-042664999475fd8cc3672db6567e2e53-cfb90.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 41.75824175824175%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABiElEQVQoz22STStEURjHD0MRk8lC8gWUjMy9w6DxkpWkmTumvO2kLEYWJh+AkmIxxUJkj4V3yhcgiymJ5L2slNDc0ORlcfzOdaZm4alfz/88c59//3PvCNsyc8AlqFTYTKDv7bDh/jsbzvwxVCuavSJXZBXnUkgHvaJDnyuFXnK6bRmDMAM/cIJxsZq/alO9VATu5mrh0oZjUA5x2MbckzGbkAONEpMpqJC9AaWvUzqpqmC1GGbpmKVD+g4MMUvSY8zu4RlWMTMTX1G/THf7lcltyjKjEEPfYXj+ZpllOt07Bn30URbP9MxGh5nPobd0OvPqO1onPyKmMryEfTtsxlOWMSn7GuRTyNeknmv1iiWWjuAARnTqB3QbLMJGxtADSdnfoAxXSdUlewJOYnQk68p7LL3AOtSTzNdSIyR6GsbhC1Yy77AEsxtSndJnP53rG1H1m5RSmRXCBQvzsKaNOqCVeSPmBeh2aFF/FVdW0tMfrk93kp11VuXpdOrr7sICLMMms3zxT/0Ca9y1brfl+k0AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="git logo" title="" src="/static/git-042664999475fd8cc3672db6567e2e53-d766e.png" srcset="/static/git-042664999475fd8cc3672db6567e2e53-a6b6e.png 143w,\n/static/git-042664999475fd8cc3672db6567e2e53-8e488.png 285w,\n/static/git-042664999475fd8cc3672db6567e2e53-d766e.png 570w,\n/static/git-042664999475fd8cc3672db6567e2e53-13239.png 855w,\n/static/git-042664999475fd8cc3672db6567e2e53-cfb90.png 910w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<p>Command line programs like Vim, Ack, bash/zsh/fish, and git all nail the idea of declarative configuration files that are stored in a common place.  They fall short of a pure A since they don’t provide a sync solution themselves (that would be very non-unixy), but since it is easy to set up <a href="https://dotfiles.github.io/">dotfile repos</a> to sync and backup these settings, they qualify for a strong A-.</p>\n<h4>iTerm2 - <em>C</em></h4>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/iterm-6ad77f78686b0db16d3e262640e631b8-c7942.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 512px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVQ4y7WUS08TURSAxwRoeT/6minz7JTOs0NrIiDWUAgLiBiICxNXhgCxFGLiziWLhuDGEDcmxoUb18SNcesvMOGxgP/gAl0Zpvd4zu1DUBNd6CRf7r2TOV/OuefOFYT/8WQymYhlWdFcLhcdy43xkWM11tls9reYphnFWD5qmhaJRqPXhP39ffXk5OTT2dnZ8enp6SFyxDlrcvpHDjH26Pj4+PDg4MAT5ufn7UqlAtvb27BV3YKt7a3GWEE2G/Nqtdpmc3OzDcVVKo/4uL6+DsvLy1OCKImWoRvfDNNguqeHhq6HqqWGyqQSKtcRA5GVUJZlzujoaJhOpzmSJHFEUQxTYqoej8cnBD2r24WgcOFUXZDeycy/kwf3ngPSSwnkZzL4t33wHR88zwPXdTmO43Bs2yYYgXsOuq5PCoqpOMXxwkXyQxqUtzobL42D9cCC+Os4iPsiuGWU2Chxr0g42EhAEcMGMcMwALOfEjRDcwqFQug/zIP0XmZjTyxw7juQeJUA6bkEXtkDz8bsvB/ZkQglQBLsLlNVleF2QCqVQqGpuSS0HzuQ+jjKMrUsuPddiL2JgfhCBH8OS3Z9LqOySIICUBQFSIKQjGF2kEgkbgqqqXnFoBi6qx4Yz0xWnCiCe9cFtaaC/lQHe8IGM2OCqqlcQIEtsDEEw8YwbAzEYrFpQdc0jzJEKSCsUCxAfjwPdmCDkTNAVmQMagdzUAAkILBMRiSTSRgeHp4WMH2fC68XIR/kGf4ZvJy0lG7QFLQkGMwhAZZIMAKPDAwODmKGuu4HQRCSiPaiFcwFUjsLLrgkARJgiQQjRkZGYGBgYFrAj306sM0SmCT+XkKCSxIgAZZIMGJoaAj6+vpuCZimT6e9WRr7uaxkMvGLkGSXhShj6GkIe3p6fEz1or+/n+GLOoFzTmvd29tbx+/q3d3dHLxV6pFIBOmqd3U16OzshI6OjlsCnvhgaWkJVlZW6OcGms/NzbUpl8swOzvboDwLMzMz/B1B8xalUokOfUlYXFy0a7Xa593d3a97e3vnOzs7X/Dm+LK2ttYeWzTX5zheYWNj43x1dfV8YWHhBt2vHYiNBIiP5Jv4f4HXhOYW0vXPb//vmnX2wIx/oAQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="iterm2 Logo"\n        title=""\n        src="/static/iterm-6ad77f78686b0db16d3e262640e631b8-c7942.png"\n        srcset="/static/iterm-6ad77f78686b0db16d3e262640e631b8-6e65d.png 143w,\n/static/iterm-6ad77f78686b0db16d3e262640e631b8-1ded9.png 285w,\n/static/iterm-6ad77f78686b0db16d3e262640e631b8-c7942.png 512w"\n        sizes="(max-width: 512px) 100vw, 512px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://www.iterm2.com/">iterm2</a> is probably the most popular terminal replacement on the mac.  It has tons of settings that you normally edit through a GUI menu.  It does allow you to export those settings, and import them on another machine.  So you need to have access to the original file to generate a snapshot at any given time and need a way to transfer the file(s), but otherwise this is still pretty workable.</p>\n<h4>Hyper - <em>A-</em></h4>\n<p><a href="https://hyper.is/">Hyper</a> is a newer <a href="https://electron.atom.io/">Electron</a>-based terminal application for OSX.  Like Sublime Text, it defaults to offering a GUI interface into text based configuration files.  Unlike Sublime Text, it stores that file and its plugin files in the users home directory where they can easily be included in a dotfile repo.</p>\n<h4>MacOS - <em>D-</em></h4>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/macos-8af8f768ce91ce5a30f67cff603de68e-69191.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEFAv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAduYzSgSxz//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIREiIx/9oACAEBAAEFAsSkakZMbdLn/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BR//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAWEAEBAQAAAAAAAAAAAAAAAAAQMQD/2gAIAQEABj8CLq//xAAaEAACAgMAAAAAAAAAAAAAAAAAARFBMXHh/9oACAEBAAE/IYuzQQ3RJyLQd2Z//9oADAMBAAIAAwAAABCD3//EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAwEBPxBR21f/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QNJ//xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhQXGx/9oACAEBAAE/EGnUs9FvXjqY2qo8FbhYPrvUQPof/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="macOS sierra Logo"\n        title=""\n        src="/static/macos-8af8f768ce91ce5a30f67cff603de68e-6fbc3.jpg"\n        srcset="/static/macos-8af8f768ce91ce5a30f67cff603de68e-da4c7.jpg 143w,\n/static/macos-8af8f768ce91ce5a30f67cff603de68e-1d39e.jpg 285w,\n/static/macos-8af8f768ce91ce5a30f67cff603de68e-6fbc3.jpg 570w,\n/static/macos-8af8f768ce91ce5a30f67cff603de68e-69191.jpg 800w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Unlike most of the applications I run on it, MacOS is extremely unfriendly to syncing configurations.  There are a few settings I want the same on all my laptops.  Touchpad scrolling should be in the “unnatural”<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup> direction, keys should repeat when held, and caps log should be disabled/mapped to control.  There is a set of apps that I would always want to have installed.  There is no declarative way to configure this, or sync it across computers.  Apple’s preferred strategy seems to be having folks use time machine backups, which is great for setting up a new computer for the same purpose as an old one when it is being replaced, but unhelpful when 2 laptops are being used by the same person for different purposes.  It is possible to script the setup of a new laptop with scripts like <a href="https://github.com/mathiasbynens/dotfiles/blob/master/.macos">this one</a> but its very involved and when you update a setting the “normal MacOS way”, its not always clear how you would add that setting to a script.  Plus a “from scratch” script won’t help keep 2 machines aligned as their configs diverge over time.</p>\n<h4>Cloud Services - <em>A</em></h4>\n<p>Unsurprisingly, the one class of software that really nails this experience is cloud software.  For services like Dropbox, Bear, Evernote, Slack, email &#x26; calendar clients, etc, most if not all settings and data is stored on servers somewhere else, so getting a new machine up to date and staying in sync over time is just a matter of entering a password.  There are reasons to dislike cloud services, but when moving to a new machine, they’re a thing of beauty.</p>\n<h2>Takeaways</h2>\n<p>If you are going to be using 2 computers for different purposes as a developer, take the time to setup a good dotfiles repo that contains the configs for the command line programs and editors you use.  These days if you do that, pretty much everything else but the operating system will come right along.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Honestly the wording around that feature is pretty insulting.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',frontmatter:{title:"Grading Applications On Config Portability",keywords:"configuration portability atom Sublime Text MacOS Vim",category:"tools",date:"2017-04-14T21:30:00+00:00",path:"/2017/04/14/grading-applications-on-config-portability/",layout:"post",hideFooter:null},fields:{slug:"/2017/04/14/grading-applications-on-config-portability/"}}},pathContext:{slug:"/2017/04/14/grading-applications-on-config-portability/",relatedPosts:[{path:"/2016/01/11/the-most-interesting-atom-packages-ive-found-so-far",data:{title:"The Most Interesting Atom Packages I've found (so far)",path:"/2016/01/11/the-most-interesting-atom-packages-ive-found-so-far",description:"A rundown of the coolest Atom packages I've seen",date:"2016-01-11T02:25:49+00:00"}},{path:"/learning-vim-in-2014",data:{title:"Learning Vim in 2014",path:"/learning-vim-in-2014",description:"A series of beginner level articles on Vim",date:null}},{path:"/2014/11/10/vim-workflows-file-switching-strategies",data:{title:"Vim Workflows: File Switching",path:"/2014/11/10/vim-workflows-file-switching-strategies",description:"A look at the different approaches you can take to managing files in Vim",date:"2014-11-10T04:06:52+00:00"}}]}}}});
//# sourceMappingURL=path---2017-04-14-grading-applications-on-config-portability-667678b04d3fc4021281.js.map