# Programming for AI

# Author
**Matthias Bartolo 0436103L**

## Preview:
<p align='center'>
  <img src="https://github.com/mbar0075/Programming-for-AI/assets/103250564/de906456-1e3f-4372-b498-845986385fc7" style="display: block; margin: 0 auto; width: 70%; height: auto;"></br>
  <img src="https://github.com/mbar0075/Programming-for-AI/assets/103250564/e493e44a-51ce-431f-847a-fa44320998d8" style="display: block; margin: 0 auto; width: 40%; height: auto;">
  <img src="https://github.com/mbar0075/Programming-for-AI/assets/103250564/8953c375-4a11-4679-9efd-21a4342356eb"  style="display: block; margin: 0 auto; width: 29%; height: auto;">
</p>

## Description of Task:
The aim of this project was to provide a comprehensive understanding and practical experience in two key programming domains: stand-alone programming using **Python** and web development using **HTML5**, **CSS**, and **Javascript**. Python had gained significant popularity and was widely used in various fields, including AI and Machine Learning. Additionally, proficiency in web development was essential as more software solutions were being offered through responsive web interfaces accessible via web browsers.

Throughout the project, I acquired the necessary knowledge and skills to implement solutions from both the client and server perspectives. This involved utilizing Python for server-side programming and leveraging HTML5, CSS, and Javascript to develop responsive web interfaces on the client side.

![Haz Zebbug Web Portal](https://github.com/mbar0075/Programming-for-AI/assets/103250564/72562b61-f7c5-4ad0-85b0-1eaea2cdbbd8)

The project focused on achieving the following outcomes:

I analyzed problem specifications and determined the suitability of Python and web development techniques for the solution. I designed effective solutions based on the identified problem requirements. I gained an understanding of the technologies involved in stand-alone and client-server solutions. I identified relevant libraries and third-party modules that enhanced the solution.

To accomplish these goals, I installed and executed Python, designed, implemented, and tested stand-alone solutions using Python, set up a web server environment, designed, implemented, and tested web solutions using HTML5, CSS, and Javascript, and developed and evaluated client-server solutions.

By actively engaging in practical exercises throughout the project, I gained valuable hands-on experience in Python programming and web development. These acquired programming skills will not only benefit me in future projects but will also contribute to my professional growth in the field of AI.

``` python
import random

class Card:
        suit=["Hearts","Diamonds","Clubs","Spades"]
        value=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
        
class Deck(Card):
    cards=[]
    size=52
    
    #Initialisation:
    for i in range(len(Card.suit)):
        for j in range(len(Card.value)):
            temp=str(Card.value[j])+" of "+str(Card.suit[i])
            cards.append(temp)  
            
    def pprint(self):
        for i in range(self.size):
            print(self.cards[i])
            
    def shuffle(self):
        random.shuffle(self.cards)
    
    def deal(self):
        index = random.randint(0,self.size)
        if(self.cards[index]!=0):
            print("Drawing card: ",self.cards[index])
            self.cards[index]=0 
        else:
            self.deal()
```

## Deliverables:
The repository includes :<br />
1. [Python Notebooks](https://github.com/mbar0075/Programming-for-AI/tree/main/Python%20Notebooks) - directory which holds various Python Notebook
2. [City Web Portal](https://github.com/mbar0075/Programming-for-AI/tree/main/City%20Web%20Portal) - Web Project which utilises Python Flask
