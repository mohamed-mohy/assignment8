function randomQuote()
{
    var arrayOfQuote =[
                        {
                        quote: "Be yourself; everyone else is already taken.",
                        auther:"- Oscar Wilde"
                        },
                        {
                        quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
                        auther:"- Marilyn Monroe"
                        },
                        {
                        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                        auther:"- Albert Einstein"
                        },
                        {
                        quote: "So many books, so little time.",
                        auther:"- Frank Zappa"
                        },
                        {
                        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
                        auther:"- Bernard M. Baruch"    
                        },
                        {
                        quote: "You only live once, but if you do it right, once is enough.",
                        auther:"- Mae West"    
                        },
                        {
                        quote: "In three words I can sum up everything I've learned about life: it goes on.",
                        auther:"- Robert Frost"    
                        },
                        {
                        quote: "Be the change that you wish to see in the world.",
                        auther:"- Mahatma Gandhi"    
                        },
                        {
                            quote: "Be the change that you wish to see in the world.",
                            auther:"- Mahatma Gandhi"    
                        },
                        {
                            quote: "Be the change that you wish to see in the world.",
                            auther:"- Mahatma Gandhi"    
                        }
                    ]

    var random= parseInt(arrayOfQuote.length*(Math.random()*1));
    document.getElementById("quote").innerHTML = '"' + arrayOfQuote[random].quote +  '"';
    document.getElementById("auther").innerHTML = arrayOfQuote[random].auther;

}