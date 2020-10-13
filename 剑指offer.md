# 剑指offer

##### 面试题1 赋值运算符函数

题目描述：如下为类型CMyString的声明，请为该类型添加赋值运算符函数。

```
class CMyString
{
public:
	CMyString(char* pData = nullptr);
	CMyString(const CMyString& str);
	~CMyString(void);
private:
	char* m_pData;
};
```

```
要点：
1、返回需要用引用，这样就可以实现连续赋值，str1 =  str2 = str3;
2、传入的形参应该声明为常量引用，这样就可以避免调用复制构造函数；
3、考虑释放掉自身的内存；
4、判断传入的值是不是本身，如果是，就返回。
```

代码：

```
CMyString& CMyString::operator=(const CMyString &str)
{
	if(this == &str)
		return *this;
	delete []m_pData;
	m_pData = nullptr;
    m_pData = new char[strlen(str.m_pData)+1];
    strcpy(m_pData,str.m_pData);
    return *this;
}
```

改进版本：

主要是防止申请内存不足的情况，此时m_pData就可能是nullptr；

此处还利用块作用域，使得if结束以后，strTemp就会销毁m_pData，但此时的m_pData指向的是此例的m_pData；

与上一个解法不同的是，上一个是深度拷贝，这一个是浅拷贝。

```
CMyString& CMyString::operator(const CMyStriang &str)
{
	if(this != &str)
	{
		CMyString strTemp(str);
		char* pTemp = strTemp.m_pData;
		strTemp.m_pData = m_pData;
		m_pData = pTemp;
	}
	return *this;
}
```



