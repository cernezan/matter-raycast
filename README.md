# Matter
View your saved for later articles from Matter inside [Raycast](https://www.raycast.com/). 


## Features
- 📰 displayed articles saved in Matter
- 🔢 word count displayed

## Get your Matter token
This token is needed for the API calls to Matter service to show your saved articles. Since Matter doesn't offitially provide an API token in the accoutn settings we have to dig into their requests to find it. 

1. Visit [Matter Webpage](web.getmatter.com) and login. 
2. Right click and select 'Inspect'.
3. Switch to Network tab, make sure the record network activity is on.
4. Hard refresh the page using CMD + Shift + R and select first new request queue.
5. Inside Request headers there should be a cookie field with access_token. That's your Matter token we're looking for.
6. Copy the access_token and past it inside the extension.
