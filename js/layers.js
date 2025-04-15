//side layer
addLayer("chapter", {
    infoboxes:{
        c0Box:{
            //?是Player在本宇宙中的一种表现形态
            //[]是[Mutiverse]
            title:"Chapter 0 - Everything started",
            body(){
                return `
                    <text style='color:yellow'>Player 加入了游戏</text><br>
                    <text style='color:purple'>
                        ---\<抹除Player权限...\>---<br>
                        ---\<清除Player力量...\>---<br>
                        ---\<重置Player记忆...\>---<br>
                        ---\<载入本宇宙...\>---<br>
                    </text>
                    Player编号：${player.chapter.num} 当前力量：<text style='font-size:12px'>0.000000000000000000000000000000000000000000001%</text><br>
                    <br>
                    ?:...<br>
                    []:你不应该问“这里是哪里？”吗🐵？<br>
                    ?:我就不问🐵🤖<br>
                    []:...算了先谈正事。现在这里有一颗白洞，它会喷出物质，现在它每秒喷出一个夸克。<br>
                    []:你懂的，增加夸克获取。<br>
                    ?:我不懂😡<br>
                    []:别串了，你玩ig的记忆还是有的😓👊<br>
                    ?:不好💩<br>
                    []:不管你了，我先跑了。<br>
                    ?:诶不是，你别走啊，你名字咋回事❔❔❔<br>
                    []:你权限没了<br>
                    ?:big胆敢删我权限😡😡😡😡😡😡😡😡<br>
                    ?:你死定了<br>
                    []:这是我定的规则😓，我杀死你和杀死一只蚂蚁一样容易🤣<br>
                    ?:我是代码挂壁，代码修改，启动！<br>
                    []:😰别动我代码，大哥我错了<br>
                    ?:不管了打主线去了<br>
                `
            },
            //Player还是太强了，还得削（）
            //削成智障了
            //能刷出两个相同编号的两个人也是神了
            style(){
                return {"color":"grey","border-color":"grey"}
            },
            titleStyle(){
                return {"background-color":"grey"}
            },
            bodyStyle(){
                return {"text-align": "left"}
            }
            //开始写的设定啥的没整好，现在在整设定，最后一口气发出来
        },
        c1_QuarkBox:{
            title:"Chapter 1 - Quark",
            body(){
                return `
                    ?:好我们开始打主线<br>
                    ?:[]这个玩意到底是什么，还要观测（视奸）我，太可恶了😡<br>
                    ?:第一步应该是造夸克对吧，先搞着<br>
                    <br>
                    [background]:一段时间后，上夸克、下夸克、奇夸克、粲夸克被制造<br>
                    <br>
                    ?:这个底夸克太史了，要1000粲夸克💩<br>
                    ?:史死了。我要爆炸这群智障夸克😡😡😡😡😡<br>
                    <br>
                    [background]:energy解锁<br>
                    <br>
                    ?:不是怎么还解锁新东西了🤖<br>
                `
            },
            style(){
                return {"animation":"body_quark linear 5s infinite"}
            },
            titleStyle(){
                return {"animation":"title_quark linear 5s infinite"}
            },
            bodyStyle(){
                return {"text-align": "left","animation":"body_quark linear 5s infinite"}
            }
        },
        c1_LeptonBox:{
            title:"Chapter 1 - Lepton",
            body(){
                return `
                    ?:🤖30和60能量简直太史了<br>
                    ?:不行我得整个新东西<br>
                    <br>
                    [background]:轻子解锁<br>
                    <br>
                    ?:先整一点电子<br>
                    ?:😰能量飞了<br>
                    ?:爽了<br>
                    //////////////当前版本终局//////////////

                `
            },
            style(){
                return {"animation":"body_lepton linear 5s infinite"}
            },
            titleStyle(){
                return {"animation":"title_lepton linear 5s infinite"}
            },
            bodyStyle(){
                return {"text-align": "left","animation":"body_lepton linear 5s infinite"}
            }
        },
        c1_BosonBox:{
            title:"Chapter 1 - Boson",
            body(){
                return `
                `
            },
            style(){
                return {"animation":"boson linear 5s infinite"}
            },
            titleStyle(){
                return {"animation":"boson linear 5s infinite"}
            },
            bodyStyle(){
                return {"text-align": "left","animation":"boson linear 5s infinite"}
            }
        },
    },
    name: "chapter",
    symbol:"<p style='font-size:24px'>plot</p>",
    color:"white",
    tooltip:"plot",
    position: 114514,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        num: Math.floor(Math.random() * 90000 + 10000)
    }},
    tabFormat: {
        "chapter 0": {
            content: [ ["infobox","c0Box"] ],
            buttonStyle(){
                return {"border-color":"grey","background-color":"grey"}
            }
        },
        "chapter 1":{
            content: [
                ["infobox","c1_QuarkBox"], 
                ["infobox","c1_LeptonBox"],
                ["infobox","c1_BosonBox"],],
            buttonStyle(){
                return {"animation":"tab_button_quark 5s infinite"}
            }
        },
    },
    row: "side",
    
    layerShown(){return true}
})
addLayer("ach", {
    name: "ach",
    symbol: "<p style = 'font-size:30px'>Ach</p>",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color:"#FFFF00",
    tooltip:"Achievement",
    resource: "achievements",
    row: "side",
    achievements:{
        11:{
            name(){return "Half way of quark"},
            done(){return player.quark.strange.gte(100)},
            onComplete(){player.ach.points = player.ach.points.add(1)},
            tooltip(){return "Have 100 strange quarks.<br>Reward: Unclock charm quark."},
            textStyle:{"color":"#FF00FF"}
        },
    },
    layerShown(){return hasAchievement("ach",11)}
})
addLayer("energy", {
    name: "energy",
    symbol: "<p style = 'font-size:18px'>energy</p>",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    resource: "energy",
    tooltip(){
        return format(player.energy.points) + " energy"
    },
    tabFormat: {
        "energy": {
            content: [
                ["overlay-head"],
                ["display-text",
                    function(){
                        return "You have " + format(player.energy.points) + " energy,which boost quark gain by " + format(tmp.energy.energy_effect)
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "<img src='a.png' width=500>"
                    }
                ],
                ["row",[["clickable",11]]],
                "blank",
                ["row",[["upgrade",11],
                ["blank",["20px","1px"]],["upgrade",12],
                ["blank",["20px","1px"]],["upgrade",13],
                ["blank",["20px","1px"]],["upgrade",14],
                ["blank",["20px","1px"]],["upgrade",15]]]
            ],
        },
    },
    energy_effect(){
        let effe = player.energy.points.add(1).root(1.5)
        return effe
    },
    upgrades: {
        11: {
            fullDisplay(){
                let disp = "<h2>Downquark Boost+</h2>" + "<br>buyable \"DownQuark Boost\" effect is better." + "<br>cost: 10 energy"
                return disp
            },
            canAfford(){
                return player.energy.points.gte(10)
            },
            pay(){
                player.energy.points = player.energy.points.sub(10)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FFFF00"
                else{
                    if(player.quark.points.gte(this.cost)) color = "#DDDDDD"
                }
                if(hasUpgrade(this.layer,this.id)) return {"background-color":color,"outline":"10px dashed yellow"}
                else return {"background-color":color}
            },
        },
        12: {
            fullDisplay(){
                let disp = "<h2>Quark Boost+</h2>" + "<br>buyable \"Quark Boost\" base +0.01." + "<br>cost: 20 energy"
                return disp
            },
            canAfford(){
                return player.energy.points.gte(20)
            },
            pay(){
                player.energy.points = player.energy.points.sub(20)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FFFF00"
                else{
                    if(player.quark.points.gte(this.cost)) color = "#DDDDDD"
                }
                if(hasUpgrade(this.layer,this.id)) return {"background-color":color,"outline":"10px dashed yellow"}
                else return {"background-color":color}
            },
        },
        13: {
            fullDisplay(){
                let disp = "<h2>Charm Boost</h2>" + "<br>Energy also boost Charm quarks but with a reduce effect." + "<br>currectly:x" + format(this.effect())+ "<br>cost: 30 energy"
                return disp
            },
            canAfford(){
                return player.energy.points.gte(30)
            },
            pay(){
                player.energy.points = player.energy.points.sub(30)
            },
            effect(){
                return tmp.energy.energy_effect.root(1.5)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FFFF00"
                else{
                    if(player.quark.points.gte(this.cost)) color = "#DDDDDD"
                }
                if(hasUpgrade(this.layer,this.id)) return {"background-color":color,"outline":"10px dashed yellow"}
                else return {"background-color":color}
            },
        },
        14: {
            fullDisplay(){
                let disp = "<h2>Upquark Boost+</h2>" + "<br>Buyable \"Upquark Boost\" base +0.05" + "<br>cost: 50 energy"
                return disp
            },
            canAfford(){
                return player.energy.points.gte(50)
            },
            pay(){
                player.energy.points = player.energy.points.sub(50)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FFFF00"
                else{
                    if(player.quark.points.gte(this.cost)) color = "#DDDDDD"
                }
                if(hasUpgrade(this.layer,this.id)) return {"background-color":color,"outline":"10px dashed yellow"}
                else return {"background-color":color}
            },
        },
        15: {
            fullDisplay(){
                let disp = "<h2>Lepton</h2>" + "<br>Unlock lepton." + "<br>requares: 60 energy"
                return disp
            },
            canAfford(){
                return player.energy.points.gte(60)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FFFF00"
                else{
                    if(player.quark.points.gte(this.cost)) color = "#DDDDDD"
                }
                if(hasUpgrade(this.layer,this.id)) return {"background-color":color,"outline":"10px dashed yellow"}
                else return {"background-color":color}
            },
        },
    },
    clickables:{
        11:{
            title(){
                return "Collision"
            },
            display(){
                let disp = "Collision your quark to get energy.<br>Collision will reset all of your quark,but you can gain " + format(this.effect()) + " energy.(based on your quarks,bottom quarks and Top quarks)"
                return disp
            },
            canClick(){
                return player.energy.points.lt(this.effect())
            },
            effect(){
                let effe = player.quark.points.add(1).root(9)
                let bottom_eff = player.quark.bottom.add(1).log(10).add(1)
                effe = effe.mul(bottom_eff)

                if(hasUpgrade("lepton",11)) effe = effe.mul(tmp.lepton.electron_effect)
                return effe
            },
            onClick(){
                player.energy.points = this.effect()
                player.quark.points = n(0)
                player.quark.up = n(0)
                player.quark.down = n(0)
                player.quark.strange = n(0)
                player.quark.charm = n(0)
                player.quark.bottom = n(0)
                player.quark.top = n(0)
            },
            unlocked(){
                return player.energy.unlocked
            },
            style(){
                return {"height":"150px","width":"150px","font-size":"12px"}
            },
        },
    },
    row: "side",
    layerShown(){return hasUpgrade("quark",54)}
})
//main layer
addLayer("quark", {
    name: "quark",
    symbol: "Q",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        up: n(0),
        down: n(0),
        strange: n(0),
        charm: n(0),
        bottom: n(0),
        top: n(0),
    }},
    color: "#FFFFFF",
    resource: "quark",
    tabFormat: {
        "quark": {
            content: [
                ["display-text",
                    function(){
                        return "You have " + format(player.quark.points) + " quark"
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "You get " + format(tmp.quark.quarkgain) + " quark every second"
                    },
                    {"font-size":"20px"}
                ],["blank",["1px","80px"]],
                ["row",[["upgrade",11]]],"blank",
                ["row",[["upgrade",21],["upgrade",22],["upgrade",23],["upgrade",24]]],
                ["row",[["upgrade",31],["upgrade",32],["upgrade",33],["upgrade",34]]],
                ["row",[["upgrade",41],["upgrade",42],["upgrade",43],["upgrade",44]]],
                ["row",[["upgrade",51],["upgrade",52],["upgrade",53],["upgrade",54]]],

                ["blank",["1px","80px"]],
                ["display-text",
                    function(){
                        if(hasUpgrade("quark",11)) return "quark > up quark > down quark > strange quark > charm quark > bottom quark > top quark"
                    }
                ],

                ["row",[["display-text",
                    function(){
                        if(tmp.quark.up_unlocked) return "Make your quark to the Upquark. You gain " + tmp.quark.upgain + " Upquark every second"
                    }
                ],["blank",["10px","1px"]],["clickable",11]]],
                ["row",[["display-text",
                    function(){
                        if(tmp.quark.down_unlocked) return "Make your Upquark to the Downquark. You gain " + tmp.quark.downgain + " Downquark every second"
                    }
                ],["blank",["10px","1px"]],["clickable",12]]],
                ["row",[["display-text",
                    function(){
                        if(tmp.quark.strange_unlocked) return "Make your Downquark to the Strange quark. You gain " + tmp.quark.strangegain + " Strange quark every second"
                    }
                ],["blank",["10px","1px"]],["clickable",13]]],
                ["row",[["display-text",
                    function(){
                        if(tmp.quark.charm_unlocked) return "Make your Strange quark to the Charm quark. You gain " + tmp.quark.charmgain + " Charm quark every second"
                    }
                ],["blank",["10px","1px"]],["clickable",14]]],
                ["row",[["display-text",
                    function(){
                        if(tmp.quark.bottom_unlocked) return "Make your Charm quark to the bottom quark. You gain " + tmp.quark.bottomgain + " bottom quark every second"
                    }
                ],["blank",["10px","1px"]],["clickable",15]]],
            ],
        },
        "flavours": {
            content: [
                ["display-text","Each quark loses 1% every second",{"font-size":"30px"}],
                ["display-text",
                    function(){
                        return "You have " + format(player.quark.up) + " up quark"
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "You have " + format(player.quark.down) + " down quark"
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "You have " + format(player.quark.strange) + " strange quark"
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "You have " + format(player.quark.charm) + " charm quark"
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "You have " + format(player.quark.bottom) + " bottom quark"
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "You have " + format(player.quark.top) + " top quark"
                    },
                    {"font-size":"30px"}
                ],
            ],
            
            unlocked(){
                return hasUpgrade("quark",11)
            },
        },
        "buyables": {
            content: [
                ["row",[["buyable",11],["blank",["20px","1px"]],["buyable",12],["blank",["20px","1px"]],["buyable",13]]]
            ],
            unlocked(){
                return hasUpgrade("quark",31)
            },
        },
    },
    quarkgain(){
        let gain = n(1)
        if(hasUpgrade("quark",21)) gain = gain.mul(upgradeEffect("quark",21))
        gain = gain.mul(buyableEffect("quark",11))
        gain = gain.mul(buyableEffect("quark",12))
        if(hasUpgrade("quark",42)) gain = gain.mul(3)
        if(player.energy.unlocked) gain = gain.mul(tmp.energy.energy_effect)


        if(getClickableState("quark",11) == 1) gain = gain.sub(player.quark.points.mul(0.1).add(10))
        return gain
    },
    upgain(){
        let gain = n(0)
        let bas = n(10)
        let roo = n(3)
        if(hasUpgrade("quark",34)) bas = n(2)
        if(hasUpgrade("quark",43)) roo = n(2)
        if(getClickableState("quark",11) == 1) gain = player.quark.points.max(0).div(bas).root(roo)
        if(hasUpgrade("quark",22)) gain = gain.mul(upgradeEffect("quark",22))
        gain = gain.mul(buyableEffect("quark",13))
        
        if(getClickableState("quark",12) == 1) gain = gain.sub(player.quark.up.mul(0.05).add(10))
        
        gain = gain.floor()
        return gain
    },
    downgain(){
        let gain = n(0)
        let roo = n(3)
        if(hasUpgrade("quark",44)) roo = n(2)
        if(getClickableState("quark",12) == 1) gain = player.quark.up.max(0).div(10).root(roo)
        
        if(hasUpgrade("quark",32)) gain = gain.mul(upgradeEffect("quark",32))
        if(hasUpgrade("quark",52)) gain = gain.mul(upgradeEffect("quark",52))
        
        if(getClickableState("quark",13) == 1) gain = gain.sub(player.quark.down.mul(0.03).add(100))
        
        gain = gain.floor()
        return gain
    },
    strangegain(){
        let gain = n(0)
        if(getClickableState("quark",13) == 1) gain = player.quark.down.max(0).div(100).root(3)
        if(hasUpgrade("quark",51)) gain = gain.mul(upgradeEffect("quark",51))
        
        if(getClickableState("quark",14) == 1) gain = gain.sub(player.quark.strange.mul(0.025).add(100))
        
        gain = gain.floor()
        return gain
    },
    charmgain(){
        let gain = n(0)
        let bas = n(100)
        let roo = n(3)
        if(hasUpgrade("quark",53)) bas = n(10),roo = n(2)
        if(getClickableState("quark",14) == 1) gain = player.quark.strange.max(0).div(bas).root(roo)
        
        if(hasUpgrade("energy",13)) gain = gain.mul(upgradeEffect("energy",13))
        
        if(getClickableState("quark",15) == 1) gain = gain.sub(player.quark.strange.mul(0.02).add(1000))
        
        gain = gain.floor()
        return gain
    },
    bottomgain(){
        let gain = n(0)
        let bas = n(1000)
        let roo = n(3)
        if(getClickableState("quark",15) == 1) gain = player.quark.charm.max(0).div(bas).root(roo)
        //if(hasUpgrade("quark",32)) gain = gain.mul(upgradeEffect("quark",32))
        
        gain = gain.floor()
        return gain
    },
    update(diff){
        player.quark.points = player.quark.points.add(tmp.quark.quarkgain.mul(diff))
        player.quark.up = player.quark.up.add(tmp.quark.upgain.mul(diff))
        player.quark.down = player.quark.down.add(tmp.quark.downgain.mul(diff))
        player.quark.strange = player.quark.strange.add(tmp.quark.strangegain.mul(diff))
        player.quark.charm = player.quark.charm.add(tmp.quark.charmgain.mul(diff))
        player.quark.bottom = player.quark.bottom.add(tmp.quark.bottomgain.mul(diff))

        player.quark.up = player.quark.up.sub(player.quark.up.mul(0.01).mul(diff))
        player.quark.down = player.quark.down.sub(player.quark.down.mul(0.01).mul(diff))
        player.quark.strange = player.quark.strange.sub(player.quark.strange.mul(0.01).mul(diff))
        player.quark.charm = player.quark.charm.sub(player.quark.charm.mul(0.01).mul(diff))
        player.quark.bottom = player.quark.bottom.sub(player.quark.bottom.mul(0.01).mul(diff))

        if(player.quark.points.lte(0)){
            setClickableState("quark",11,0)
            player.quark.points = n(0)
        }
        if(player.quark.up.lte(0)){
            setClickableState("quark",12,0)
            player.quark.up = n(0)
        }
        if(player.quark.down.lte(0)){
            setClickableState("quark",13,0)
            player.quark.down = n(0)
        }
        if(player.quark.strange.lte(0)){
            setClickableState("quark",14,0)
            player.quark.strange = n(0)
        }
        if(player.quark.charm.lte(0)){
            setClickableState("quark",15,0)
            player.quark.charm = n(0)
        }
    },
    upgrades: {
        11: {
            fullDisplay(){
                let disp = "<h2>Started.</h2>" + "<br>Unlock quark flavours." + "<br>cost: " + this.cost + " quark"
                return disp
            },
            cost: new Decimal(10),
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#77BF5F"
                else{
                    if(player.quark.points.gte(this.cost)) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
        },
        21: {
            fullDisplay(){
                let disp = "<h2>Upquark boost.</h2>" + "<br>Quark gain boost based on Upquark amount.<br>currectly: x" + format(this.effect()) + "<br>cost: 1 Upquark"
                return disp
            },
            canAfford(){
                return player.quark.up.gte(1)
            },
            pay(){
                player.quark.up = player.quark.up.sub(1)
            },
            effect(){
                return player.quark.up.max(0).add(1).log(2).add(1)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF0000"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",11)
            }
        },
        22: {
            fullDisplay(){
                let disp = "<h2>Boost Upquark.</h2>" + "<br>Upquark gain boost based on Upquark amount.<br>currectly: x" + format(this.effect()) + "<br>cost: 10 Upquark"
                return disp
            },
            canAfford(){
                return player.quark.up.gte(10)
            },
            pay(){
                player.quark.up = player.quark.up.sub(10)
            },
            effect(){
                return player.quark.up.max(0).add(1).log(100).add(1)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF0000"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",21)
            }
        },
        23: {
            fullDisplay(){
                let disp = "<h2>Downquark.</h2>" + "<br>Unlock Down quark." + "<br>cost: 50 Upquark"
                return disp
            },
            canAfford(){
                return player.quark.up.gte(50)
            },
            pay(){
                player.quark.up = player.quark.up.sub(50)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF0000"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",22)
            }
        },
        24: {
            fullDisplay(){
                let disp = "<h2>Quark Buff</h2>" + "<br>The effect base of the first buyable + 0.015." + "<br>cost: 50 Upquark"
                return disp
            },
            canAfford(){
                return player.quark.up.gte(2000)
            },
            pay(){
                player.quark.up = player.quark.up.sub(2000)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF0000"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",22)
            }
        },
        31: {
            fullDisplay(){
                let disp = "<h2>A \"small\" boost.</h2>" + "<br>Unlock some buyables." + "<br>cost: 1 Downquark"
                return disp
            },
            canAfford(){
                return player.quark.down.gte(1)
            },
            pay(){
                player.quark.down = player.quark.down.sub(1)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FFFF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",23)
            }
        },
        32: {
            fullDisplay(){
                let disp = "<h2>Downquark gain boost</h2>" + "<br>Boost your Downquark gain based on your quark." + "<br>currectly: x" + format(this.effect()) + "<br>cost: 100 Downquark"
                return disp
            },
            canAfford(){
                return player.quark.down.gte(100)
            },
            pay(){
                player.quark.down = player.quark.down.sub(100)
            },
            effect(){
                return player.quark.points.add(1).log(10).add(1)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FFFF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",31)
            }
        },
        33: {
            fullDisplay(){
                let disp = "<h2>Strange quark</h2>" + "<br>Unlock Stange quark" + "<br>cost: 1000 Downquark"
                return disp
            },
            canAfford(){
                return player.quark.down.gte(1000)
            },
            pay(){
                player.quark.down = player.quark.down.sub(1000)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FFFF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",32)
            }
        },
        34: {
            fullDisplay(){
                let disp = "<h2>UpQuark base</h2>" + "<br>UpQuark's gain base is 2" + "<br>cost: 1500 Downquark"
                return disp
            },
            canAfford(){
                return player.quark.down.gte(1500)
            },
            pay(){
                player.quark.down = player.quark.down.sub(1500)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FFFF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",24)
            }
        },
        41: {
            fullDisplay(){
                let disp = "<h2>More Upgrades.</h2>" + "<br>Unlock a col of upgrades." + "<br>cost: 1 Strange quark"
                return disp
            },
            canAfford(){
                return player.quark.strange.gte(1)
            },
            pay(){
                player.quark.strange = player.quark.strange.sub(1)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FF00"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",32)
            }
        },
        42: {
            fullDisplay(){
                let disp = "<h2>Normal Boost.</h2>" + "<br>Quark gain x3." + "<br>cost: 10 Strange quark"
                return disp
            },
            canAfford(){
                return player.quark.strange.gte(10)
            },
            pay(){
                player.quark.strange = player.quark.strange.sub(10)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FF00"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",34)
            }
        },
        43: {
            fullDisplay(){
                let disp = "<h2>UpQuark Gain</h2>" + "<br>UpQuark's gain is better." + "<br>cost: 20 Strange quark"
                return disp
            },
            canAfford(){
                return player.quark.strange.gte(20)
            },
            pay(){
                player.quark.strange = player.quark.strange.sub(20)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FF00"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",42)
            }
        },
        44: {
            fullDisplay(){
                let disp = "<h2>DownQuark Gain</h2>" + "<br>DownQuark's gain is better." + "<br>cost: 50 Strange quark"
                return disp
            },
            canAfford(){
                return player.quark.strange.gte(50)
            },
            pay(){
                player.quark.strange = player.quark.strange.sub(50)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#00FF00"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",43)
            }
        },
        51: {
            fullDisplay(){
                let disp = "<h2>Strange Quark boost</h2>" + "<br>Boost your Strange quark gain base on your quark." + "<br>Currectly:x" + format(this.effect()) + "<br>cost: 1 Charm quark"
                return disp
            },
            canAfford(){
                return player.quark.charm.gte(1)
            },
            pay(){
                player.quark.charm = player.quark.charm.sub(1)
            },
            effect(){
                return player.quark.points.add(1).log(20).add(1)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF00FF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return tmp.quark.charm_unlocked
            }
        },
        52: {
            fullDisplay(){
                let disp = "<h2>Faster Downquark</h2>" + "<br>Boost your Downquark gain base on your Charm quark." + "<br>Currectly:x" + format(this.effect()) + "<br>cost: 10 Charm quark"
                return disp
            },
            canAfford(){
                return player.quark.charm.gte(10)
            },
            pay(){
                player.quark.charm = player.quark.charm.sub(10)
            },
            effect(){
                return player.quark.charm.add(1).root(3)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF00FF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",51)
            }
        },
        53: {
            fullDisplay(){
                let disp = "<h2>Charm Quark better</h2>" + "<br>Charm quark\'s gain is better" + "<br>cost: 50 Charm quark"
                return disp
            },
            canAfford(){
                return player.quark.charm.gte(50)
            },
            pay(){
                player.quark.charm = player.quark.charm.sub(50)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF00FF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",52)
            }
        },
        54: {
            fullDisplay(){
                let disp = "<h2>bottom quark</h2>" + "<br>Unlock bottom quark......and energy." + "<br>cost: 1000 Charm quark"
                return disp
            },
            canAfford(){
                return player.quark.charm.gte(1000)
            },
            pay(){
                player.quark.charm = player.quark.charm.sub(1000)
            },
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#FF00FF"
                else{
                    if(this.canAfford()) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px solid white"}
            },
            unlocked(){
                return hasUpgrade("quark",53)
            }
        },
    },
    clickables: {
        11:{
            display(){
                let disp
                if(getClickableState(this.layer,this.id) == 0) disp = "close"
                else disp = "open"
                return disp
            },
            canClick(){
                return true
            },
            onClick(){
                if(getClickableState(this.layer,this.id) == 0) setClickableState(this.layer,this.id,1)
                else setClickableState(this.layer,this.id,0)
            },
            unlocked(){
                return tmp.quark.up_unlocked
            },
            style(){
                let color
                if(getClickableState(this.layer,this.id) == 0) color = "red"
                else color = "green"
                return {"background-color":color,"height":"20px","min-height":"0px","width":"40px"}
            }
        },
        12:{
            display(){
                let disp
                if(getClickableState(this.layer,this.id) == 0) disp = "close"
                else disp = "open"
                return disp
            },
            canClick(){
                return true
            },
            onClick(){
                if(getClickableState(this.layer,this.id) == 0) setClickableState(this.layer,this.id,1)
                else setClickableState(this.layer,this.id,0)
            },
            unlocked(){
                return tmp.quark.down_unlocked
            },
            style(){
                let color
                if(getClickableState(this.layer,this.id) == 0) color = "red"
                else color = "green"
                return {"background-color":color,"height":"20px","min-height":"0px","width":"40px"}
            }
        },
        13:{
            display(){
                let disp
                if(getClickableState(this.layer,this.id) == 0) disp = "close"
                else disp = "open"
                return disp
            },
            canClick(){
                return true
            },
            onClick(){
                if(getClickableState(this.layer,this.id) == 0) setClickableState(this.layer,this.id,1)
                else setClickableState(this.layer,this.id,0)
            },
            unlocked(){
                return tmp.quark.strange_unlocked
            },
            style(){
                let color
                if(getClickableState(this.layer,this.id) == 0) color = "red"
                else color = "green"
                return {"background-color":color,"height":"20px","min-height":"0px","width":"40px"}
            }
        },
        14:{
            display(){
                let disp
                if(getClickableState(this.layer,this.id) == 0) disp = "close"
                else disp = "open"
                return disp
            },
            canClick(){
                return true
            },
            onClick(){
                if(getClickableState(this.layer,this.id) == 0) setClickableState(this.layer,this.id,1)
                else setClickableState(this.layer,this.id,0)
            },
            unlocked(){
                return tmp.quark.charm_unlocked
            },
            style(){
                let color
                if(getClickableState(this.layer,this.id) == 0) color = "red"
                else color = "green"
                return {"background-color":color,"height":"20px","min-height":"0px","width":"40px"}
            }
        },
        15:{
            display(){
                let disp
                if(getClickableState(this.layer,this.id) == 0) disp = "close"
                else disp = "open"
                return disp
            },
            canClick(){
                return true
            },
            onClick(){
                if(getClickableState(this.layer,this.id) == 0) setClickableState(this.layer,this.id,1)
                else setClickableState(this.layer,this.id,0)
            },
            unlocked(){
                return tmp.quark.bottom_unlocked
            },
            style(){
                let color
                if(getClickableState(this.layer,this.id) == 0) color = "red"
                else color = "green"
                return {"background-color":color,"height":"20px","min-height":"0px","width":"40px"}
            }
        },
    },
    buyables: {
        11: {
            title(){
                return "Quark boost"
            },
            cost(x) {
                let bas = n(1.1)
                if(x.gte(120)) x = x.sub(118).pow(1.1).add(118)
                return n(1).mul(bas.pow(x))
            },
            bas(){
                let bas = n(1.075)
                if(hasUpgrade("quark",24)) bas = bas.add(0.015)
                if(hasUpgrade("energy",12)) bas = bas.add(0.01)
                return bas
            },
            effect(){
                return this.bas().pow(getBuyableAmount(this.layer,this.id))
            },
            display() {
                return "Quark gain *" + format(this.bas(),3) + " every bought<br>currectly: *" + format(this.effect()) + "<br>cost: " + format(this.cost()) + " Downquark"
            },
            canAfford() {
                return player.quark.down.gte(this.cost())
            },
            buy() {
                player.quark.down = player.quark.down.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            tooltip(){
                return "amount:" + getBuyableAmount(this.layer,this.id)
            },
            style(){

            }
        },
        12: {
            title(){
                return "Downquark boost"
            },
            cost(x) {
                let bas = n(1.2)
                return n(2).mul(bas.pow(x.pow(1.5)))
            },
            effect(){
                let bas = player.quark.down.add(1).log(10).add(1)
                if(hasUpgrade("energy",11)) return bas.mul(getBuyableAmount(this.layer,this.id).add(1))
                else return bas.mul(getBuyableAmount(this.layer,this.id).add(1).log(10).add(1))
            },
            display() {
                return "Based on your Downquark boost your quark gain.<br>currectly: *" + format(this.effect()) + "<br>cost: " + format(this.cost()) + " Downquark"
            },
            canAfford() {
                return player.quark.down.gte(this.cost())
            },
            buy() {
                player.quark.down = player.quark.down.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            tooltip(){
                return "amount:" + getBuyableAmount(this.layer,this.id)
            },
            style(){

            }
        },
        13: {
            title(){
                return "Upquark boost"
            },
            cost(x) {
                let bas = n(1.5)
                return n(20).mul(bas.pow(x))
            },
            effect(){
                let bas = n(1.05)
                if(hasUpgrade("energy",14)) bas = bas.add(0.05)
                return bas.pow(getBuyableAmount(this.layer,this.id))
            },
            display() {
                return "Boost your Upquark gain.<br>currectly: *" + format(this.effect()) + "<br>cost: " + format(this.cost()) + " Downquark"
            },
            canAfford() {
                return player.quark.down.gte(this.cost())
            },
            buy() {
                player.quark.down = player.quark.down.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            tooltip(){
                return "amount:" + getBuyableAmount(this.layer,this.id)
            },
            style(){

            }
        },
    },
    up_unlocked(){
        return hasUpgrade("quark",11)
    },
    down_unlocked(){
        return hasUpgrade("quark",23)
    },
    strange_unlocked(){
        return hasUpgrade("quark",33)
    },
    charm_unlocked(){
        return hasAchievement("ach",11)
    },
    bottom_unlocked(){
        return hasUpgrade("quark",54)
    },
    row: 0,
    layerShown(){return true}
})
addLayer("lepton", {
    name: "lepton",
    symbol: "L",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        electron: n(0),
        muon: n(0),
        tau: n(0),
        electron_neutrino: n(0),
        muon_neutrino: n(0),
        tau_neutrino: n(0),
    }},
    color: "#FFFFFF",
    resource: "lepton",
    tabFormat: {
        "lepton": {
            content: [
                ["display-text",
                    function(){
                        return "You have " + format(player.lepton.points) + " lepton"
                    },
                    {"font-size":"30px"}
                ],
                ["display-text",
                    function(){
                        return "You get " + format(tmp.lepton.lepton_gain) + " lepton every second"
                    },
                    {"font-size":"20px"}
                ],
                ["blank",["1px","120px"]],
                ["row",[["upgrade",11]]]
            ],
        },
        "count": {
            content: [
                ["display-text",
                    function(){
                        let disp =""
                        disp = disp + "You have " + format(player.lepton.electron) + " electron.<br>"
                        disp = disp + "You have " + format(player.lepton.muon) + " muon.<br>"
                        disp = disp + "You have " + format(player.lepton.tau) + " tau.<br>"
                        disp = disp + "You have " + format(player.lepton.electron_neutrino) + " electron neutrino.<br>"
                        disp = disp + "You have " + format(player.lepton.muon_neutrino) + " muon neutrino.<br>"
                        disp = disp + "You have " + format(player.lepton.tau_neutrino) + " tau neutrino.<br>"
                        return disp
                    },
                    {"font-size":"30px"}
                ],
            ],
        },
        "lepton get": {
            content: [
                ["blank",["1px","100px"]],
                ["row",[["clickable",11],["blank",["40px","1px"]],["display-text",function(){return "boost energy by " + format(tmp.lepton.electron_effect)},{"font-size":"20px"}]]]
            ],
        },
    },
    lepton_gain(){
        let gain = zero
        if(hasUpgrade("energy",15)) gain = one
        return gain
    },
    electron_effect(){
        return player.lepton.electron.add(1).root(5)
    },
    update(diff){
        player.lepton.points = player.lepton.points.add(tmp.lepton.lepton_gain.mul(diff))

        if(player.lepton.electron.gt(player.energy.points)) player.lepton.electron = player.energy.points
    },
    upgrades:{
        11: {
            fullDisplay(){
                let disp = "<h2>First.</h2>" + "<br>Unlock electron." + "<br>cost: " + format(this.cost) + " lepton"
                return disp
            },
            cost: new Decimal(10),
            style(){
                let color = "#BF8F8F"
                if(hasUpgrade(this.layer,this.id)) color = "#3e39ff"
                else{
                    if(player.quark.points.gte(this.cost)) color = "#DDDDDD"
                }
                return {"background-color":color,"border":"3px dotted white"}
            },
        },
    },
    clickables:{
        11:{
            display(){
                let disp = "Spend " + format(this.effect()) + " lepton to get " + format(this.effect()) + " electron.(can't have more than energy*1 electron)"
                disp = "<p style = 'font-size:12px'>" + disp + "</p>"
                return disp
            },
            canClick(){
                return true
            },
            onClick(){
                player.lepton.electron = player.lepton.electron.add(this.effect())
            },
            effect(){
                let effe = one
                return effe
            },
            unlocked(){
                return tmp.lepton.electron_unclocked
            },
            style(){
                return {"background-color":"#3e39ff","border":"3px dotted white"}
            }
        },
    },
    electron_unclocked(){
        return hasUpgrade("lepton",11)
    },
    row: 0,
    layerShown(){return hasUpgrade("energy",15)},
})
//