var display = document.getElementById("d");

var last = 0;
var memory = 0
var canDelete = false;
var over = false;

display.value = 0;

function show(val)
{
    display.value = val;
}

function add(val)
{
    display.value += val;
}

function enter(val)
{
    canDelete = true;
    last = 0;
    if ((display.value == "0" && val != ".") || over)
    {
        over = false;
        show(val);
    }
    else
        add(val);
}

function rem(val)
{
    if ((display.value == "0" && val != "-") || last != "0")
        return;
    if (val == "-" && display.value == "0")
        show(val);
    else
        add(val);
    last = val;
}

function mem_s()
{
    if (last)
        del();
    memory = eval(display.value);
    show(0);
}

function mem_l()
{
    if (!memory)
        return;

    if (last)
    {
        add(memory);
        canDelete = true;
    }
    else
    {
        show(memory);
        canDelete = false;
    }
    memory = 0;
    last = 0;
}

function del()
{
    if (!canDelete)
        return;

    if (display.value.length > 1)
    {
        show(display.value.substring(0, display.value.length - 1))
        last = display.value.charAt(display.value.length - 1);
        if (last != "/" && last != "*" && last != "+" && last != "-")
            last = 0;
    }
    else
    {
        show(0);
        last = 0;
    }
}

function result() 
{ 
    try 
    { 
        if (last)
            del();

        last = 0;
        canDelete = false;
        show(eval(display.value))
        over = true;
    } 
    catch(e) 
    {
      show('Error') 
    } 
}
