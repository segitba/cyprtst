class footerSN_Locators {
    
    FacebookLink(){
        
        const f = cy.get('a[href*="www.facebook.com/groups/525066904174158"]')
        return f
        
        
    }

    TwitterLink(){
        const t = cy.get('a[href*="https://twitter.com/seleniumfrmwrk"]')
        return t

    }

    YoutubeLink(){
        const y = cy.get('a[href*="https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA"]')
        return y

    }

    GPlusLink(){
        const g = cy.get('a[href*="https://plus.google.com/111979135243110831526/posts"]')
        return g

    }



}

export default footerSN_Locators