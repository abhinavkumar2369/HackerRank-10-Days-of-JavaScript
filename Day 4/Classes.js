class Polygon {
    constructor(height) 
    {
        var polygon_perimeter = 0;
        for (let index in height)
            {
                polygon_perimeter += height[index];
            }
        
        this.my_perimeter = polygon_perimeter;
    }
    
     perimeter() 
    {
        return this.my_perimeter;
    }
    
}