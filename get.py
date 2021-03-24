import requests 
import argparse  

parse = argparse.ArgumentParser() 
parse.add_argument('-t','--target', help="Objetivo") 
parse = parse.parse_args()  
def main():     
    if parse.target:         
        try:             
            objetivo = requests.get(url=parse.target)             
            header = dict(objetivo.headers)             
            for x in header:                 
                print(f'{x} : {header[x]}')         
        except:             
            print('No pude encontrar nada')

if __name__ == '__main__':     
    main()
