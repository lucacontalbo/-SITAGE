import instaloader as ig
from os import listdir, rename, getcwd
from os.path import isfile, join 
from shutil import rmtree

L = ig.Instaloader()

profile = ig.Profile.from_username(L.context, "age.giovani").get_posts()
profile = list(profile)
for i in range(3):
	print(profile[i])
	L.download_post(profile[i],"age.giovani")

path = join(getcwd(),"age.giovani")
pics = [join(path,pic) for pic in listdir(path) if isfile(join(path,pic)) and pic.endswith('.jpg')]

for i in range(3):
	rename(pics[i],join(getcwd(),"../public/ig",str(i)+"_ig.jpg"))

rmtree(path)
