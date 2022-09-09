function checkSpam(str)
{
  let newStr = str.toLowerCase();	
    if (newStr.indexOf('xxx') != -1 || newStr.indexOf('1xbet') != -1) 
    return true;
    else 
    return false;
  }
