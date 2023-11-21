function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
            ../metahuman/humanmale1.png
            ../metahuman/humanmale2.png
            ../metahuman/humanmale3.png
            ../metahuman/humanmale4.png
            ../metahuman/humanmale5.png
            ../metahuman/humanmale6.png
            ../metahuman/humanmale7.png
            ../metahuman/humanmale8.png
            ../metahuman/humanmale9.png
            ../metahuman/humanmale10.png
            ../metahuman/humanmale11.png
            ../metahuman/humanmale12.png
            ../metahuman/humanmale13.png
            ../metahuman/humanmale14.png
            ../metahuman/humanmale15.png
            ../metahuman/humanmale16.png
            ../metahuman/humanmale17.png
            ../metahuman/humanmale18.png
            ../metahuman/humanmale19.png
            ../metahuman/humanmale20.png
            ../metahuman/humanmale21.png
            ../metahuman/humanmale22.png
            ../metahuman/humanmale23.png
            ../metahuman/humanmale24.png
            ../metahuman/humanmale25.png
            ../metahuman/humanmale26.png
            ../metahuman/humanmale27.png
            ../metahuman/humanmale28.png
            ../metahuman/humanmale29.png
            ../metahuman/humanmale30.png
            ../metahuman/humanmale31.png
            ../metahuman/humanmale32.png
            ../metahuman/humanmale33.png
            ../metahuman/humanmale34.png
            ../metahuman/humanmale35.png
            ../metahuman/humanmale36.png
            ../metahuman/humanmale37.png
            ../metahuman/humanmale38.png
            ../metahuman/humanmale39.png
            ../metahuman/humanmale40.png
            ../metahuman/humanmale41.png
            ../metahuman/humanmale42.png
            ../metahuman/humanmale43.png
            ../metahuman/humanmale44.png
            ../metahuman/humanmale45.png
            ../metahuman/humanmale46.png
            ../metahuman/humanmale47.png
            ../metahuman/humanmale48.png
            ../metahuman/humanmale49.png
            ../metahuman/humanmale50.png
            ../metahuman/humanmale51.png
            ../metahuman/humanmale52.png
            ../metahuman/humanmale53.png
            ../metahuman/humanmale54.png
            ../metahuman/humanmale55.png
            ../metahuman/humanmale56.png
            ../metahuman/humanmale57.png
            ../metahuman/humanmale58.png
            ../metahuman/humanmale59.png
            ../metahuman/humanmale60.png
            ../metahuman/humanmale61.png
            ../metahuman/humanmale62.png
            ../metahuman/humanmale63.png
            ../metahuman/humanmale64.png
            ../metahuman/humanmale65.png
            ../metahuman/humanmale66.png
            ../metahuman/humanmale67.png
            ../metahuman/humanmale68.png
            ../metahuman/humanmale69.png
            ../metahuman/humanmale70.png
            ../metahuman/humanmale71.png
            ../metahuman/humanmale72.png
            ../metahuman/humanmale73.png
            ../metahuman/humanmale74.png
            ../metahuman/humanmale75.png
            ../metahuman/humanmale76.png
            ../metahuman/humanmale77.png
            ../metahuman/humanmale78.png
            ../metahuman/humanmale79.png
            ../metahuman/humanmale80.png
            ../metahuman/humanmale81.png
            ../metahuman/humanmale82.png
            ../metahuman/humanmale83.png
            ../metahuman/humanmale84.png
            ../metahuman/humanmale85.png
            ../metahuman/humanmale86.png
            ../metahuman/humanmale87.png
            ../metahuman/humanmale88.png
            ../metahuman/humanmale89.png
            ../metahuman/humanmale90.png
            ../metahuman/humanmale91.png
            ../metahuman/humanmale92.png
            ../metahuman/humanmale93.png
            ../metahuman/humanmale94.png
            ../metahuman/humanmale95.png
            ../metahuman/humanmale96.png
            ../metahuman/humanmale97.png
            ../metahuman/humanmale98.png
            ../metahuman/humanmale99.png
            ../metahuman/humanmale100.png
            ../metahuman/humanmale101.png
            ../metahuman/humanmale102.png
            ../metahuman/humanmale103.png
            ../metahuman/humanmale104.png
            ../metahuman/humanmale105.png
            ../metahuman/humanmale106.png
            ../metahuman/humanmale107.png
            ../metahuman/humanmale108.png
            ../metahuman/humanmale109.png
            ../metahuman/humanmale110.png
            ../metahuman/humanmale111.png
            ../metahuman/humanmale112.png
            ../metahuman/humanmale113.png
            ../metahuman/humanmale114.png
            ../metahuman/humanmale115.png
            ../metahuman/humanmale116.png
            ../metahuman/humanmale117.png
            ../metahuman/humanmale118.png
            ../metahuman/humanmale119.png
            ../metahuman/humanmale120.png
            ../metahuman/humanmale121.png
            ../metahuman/humanmale122.png
            ../metahuman/humanmale123.png
            ../metahuman/humanmale124.png
            ../metahuman/humanmale125.png
            ../metahuman/humanmale126.png
            ../metahuman/humanmale127.png
            ../metahuman/humanmale128.png
            ../metahuman/humanmale129.png
            ../metahuman/humanmale130.png
            ../metahuman/humanmale131.png
            ../metahuman/humanmale132.png
            ../metahuman/humanmale133.png
            ../metahuman/humanmale134.png
            ../metahuman/humanmale135.png
            ../metahuman/humanmale136.png
            ../metahuman/humanmale137.png
            ../metahuman/humanmale138.png
            ../metahuman/humanmale139.png
            ../metahuman/humanmale140.png
            ../metahuman/humanmale141.png
            ../metahuman/humanmale142.png
            ../metahuman/humanmale143.png
            ../metahuman/humanmale144.png
            ../metahuman/humanmale145.png
            ../metahuman/humanmale146.png
            ../metahuman/humanmale147.png
            ../metahuman/humanmale148.png
            ../metahuman/humanmale149.png
            ../metahuman/humanmale150.png
            ../metahuman/humanmale151.png
            ../metahuman/humanmale152.png
            ../metahuman/humanmale153.png
            ../metahuman/humanmale154.png
            ../metahuman/humanmale155.png
            ../metahuman/humanmale156.png
            ../metahuman/humanmale157.png
            ../metahuman/humanmale158.png
            ../metahuman/humanmale159.png
            ../metahuman/humanmale160.png
            ../metahuman/humanmale161.png
            ../metahuman/humanmale162.png
            ../metahuman/humanmale163.png
            ../metahuman/humanmale164.png
            ../metahuman/humanmale165.png
            ../metahuman/humanmale166.png
            ../metahuman/humanmale167.png
            ../metahuman/humanmale168.png
            ../metahuman/humanmale169.png
            ../metahuman/humanmale170.png
            ../metahuman/humanmale171.png
            ../metahuman/humanmale172.png
            ../metahuman/humanmale173.png
            ../metahuman/humanmale174.png
            ../metahuman/humanmale175.png
            ../metahuman/humanmale176.png
            ../metahuman/humanmale177.png
            ../metahuman/humanmale178.png
            ../metahuman/humanmale179.png
            ../metahuman/humanmale180.png
            ../metahuman/humanmale181.png
            ../metahuman/humanmale182.png
            ../metahuman/humanmale183.png
            ../metahuman/humanmale184.png
            ../metahuman/humanmale185.png
            ../metahuman/humanmale186.png
            ../metahuman/humanmale187.png
            ../metahuman/humanmale188.png
            ../metahuman/humanmale189.png
            ../metahuman/humanmale190.png
            ../metahuman/humanmale191.png
            ../metahuman/humanmale192.png
            ../metahuman/humanmale193.png
            ../metahuman/humanmale194.png
            ../metahuman/humanmale195.png
            ../metahuman/humanmale196.png
            ../metahuman/humanmale197.png
            ../metahuman/humanmale198.png
            ../metahuman/humanmale199.png
            ../metahuman/humanmale200.png
            ../metahuman/humanmale201.png
            ../metahuman/humanmale202.png
            ../metahuman/humanmale203.png
            ../metahuman/humanmale204.png
            ../metahuman/humanmale205.png
            ../metahuman/humanmale206.png
            ../metahuman/humanmale207.png
            ../metahuman/humanmale208.png
            ../metahuman/humanmale209.png
            ../metahuman/humanmale210.png
            ../metahuman/humanmale211.png
            ../metahuman/humanmale212.png
            ../metahuman/humanmale213.png
            ../metahuman/humanmale214.png
            ../metahuman/humanmale215.png
            ../metahuman/humanmale216.png
            ../metahuman/humanmale217.png
            ../metahuman/humanmale218.png
            ../metahuman/humanmale219.png
            ../metahuman/humanmale220.png
            ../metahuman/humanmale221.png
            ../metahuman/humanmale222.png
            ../metahuman/humanmale223.png
            ../metahuman/humanmale224.png
            ../metahuman/humanmale225.png
            ../metahuman/humanmale226.png
            ../metahuman/humanmale227.png
            ../metahuman/humanmale228.png
            ../metahuman/humanmale229.png
            ../metahuman/humanmale230.png
            ../metahuman/humanmale231.png
            ../metahuman/humanmale232.png
            ../metahuman/humanmale233.png
            ../metahuman/humanmale234.png
            ../metahuman/humanmale235.png
            ../metahuman/humanmale236.png
            ../metahuman/humanmale237.png
            ../metahuman/humanmale238.png
            ../metahuman/humanmale239.png
            ../metahuman/humanmale240.png
            ../metahuman/humanmale241.png
            ../metahuman/humanmale242.png
            ../metahuman/humanmale243.png
            ../metahuman/humanmale244.png
            ../metahuman/humanmale245.png
            ../metahuman/humanmale246.png
            ../metahuman/humanmale247.png
            ../metahuman/humanmale248.png
            ../metahuman/humanmale249.png
            ../metahuman/humanmale250.png
            ../metahuman/humanmale251.png
            ../metahuman/humanmale252.png
            ../metahuman/humanmale253.png
            ../metahuman/humanmale254.png
            ../metahuman/humanmale255.png
            ../metahuman/humanmale256.png
            ../metahuman/humanmale257.png
            ../metahuman/humanmale258.png
            ../metahuman/humanmale259.png
            ../metahuman/humanmale260.png
            ../metahuman/humanmale261.png
            ../metahuman/humanmale262.png
            ../metahuman/humanmale263.png
            ../metahuman/humanmale264.png
            ../metahuman/humanmale265.png
            ../metahuman/humanmale266.png
            ../metahuman/humanmale267.png
            ../metahuman/humanmale268.png
            ../metahuman/humanmale269.png
            ../metahuman/humanmale270.png
            ../metahuman/humanmale271.png
            ../metahuman/humanmale272.png
            ../metahuman/humanmale273.png
            ../metahuman/humanmale274.png
            ../metahuman/humanmale275.png
            ../metahuman/humanmale276.png
            ../metahuman/humanmale277.png
            ../metahuman/humanmale278.png
            ../metahuman/humanmale279.png
            ../metahuman/humanmale280.png
            ../metahuman/humanmale281.png
            ../metahuman/humanmale282.png
            ../metahuman/humanmale283.png
            ../metahuman/humanmale284.png
            ../metahuman/humanmale285.png
            ../metahuman/humanmale286.png
            ../metahuman/humanmale287.png
            ../metahuman/humanmale288.png
            ../metahuman/humanmale289.png
            ../metahuman/humanmale290.png
            ../metahuman/humanmale291.png
            ../metahuman/humanmale292.png
            ../metahuman/humanmale293.png
            ../metahuman/humanmale294.png
            ../metahuman/humanmale295.png
            ../metahuman/humanmale296.png
            ../metahuman/humanmale297.png
            ../metahuman/humanmale298.png
            ../metahuman/humanmale299.png
            ../metahuman/humanmale300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page4",{
    scrollTrigger:{
      trigger:`#page4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })




