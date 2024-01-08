class Axis {
    constructor (minX, minY, maxX, maxY, canvasWidth, canvasHeight) {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    draw(ctx) {
        
        //axis
        ctx.strokeStyle = 'blue';
        ctx.beginPath();
        ctx.moveTo(0, this.canvasHeight/2);
        ctx.lineTo(this.canvasWidth, this.canvasHeight/2);
        ctx.moveTo(this.canvasWidth/2 , 0);
        ctx.lineTo(this.canvasWidth/2, this.canvasHeight);
        ctx.stroke()

        //marks
        ctx.save();
        ctx.beginPath()
        ctx.strokeStyle = 'yellow';
        ctx.translate(this.canvasWidth/2, this.canvasHeight/2);
        ctx.fillStyle = 'yellow';
        ctx.font = '10px Verdana';
        const xstep = Math.round(this.canvasWidth/(this.maxX - this.minX));
        for (let x=-this.canvasWidth/2; x<=this.canvasWidth/2; x+=xstep) {
            ctx.moveTo(x,-4);
            //ctx.arc(x,0,2,0,2*Math.PI);
            ctx.lineTo(x,4);
            ctx.fillText(`${Math.round(x/xstep)}`, x, 14);
        }
        const ystep = Math.round(this.canvasHeight/(this.maxY - this.minY));
        for (let y=-this.canvasHeight/2; y<=this.canvasHeight/2; y+=ystep) {
            ctx.moveTo(-4, y);
            ctx.lineTo(4, y);
        }
        ctx.stroke();
        ctx.restore();

    }
}