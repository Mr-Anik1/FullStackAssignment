exports.root=(req,res)=>{
    const title='Home Page';
    res.render('pages/home',{title});//views এর ভিতরে pages folder তার ভিতরে home রয়েছে, তাই pages/home দেওয়া হয়েছে। 
};

exports.about=(req,res)=>{
    const title='About Page';
    res.render('pages/about',{title});
};

exports.contact=(req,res)=>{
    const title='Help Page';
    res.render('pages/contact',{title});
}