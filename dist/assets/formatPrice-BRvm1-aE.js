function e(r,t="USD"){return typeof r!="number"?"$0.00":new Intl.NumberFormat("en-US",{style:"currency",currency:t,minimumFractionDigits:2,maximumFractionDigits:2}).format(r)}export{e as f};
