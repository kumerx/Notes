# DOM学习笔记

### 1 节点层级
```
document节点表示每个文档的根节点，html称为文档元素（其他元素都存在于这个元素之内），每个文档只能有一个文档元素，HTML页面中，是html元素，而XML文档中，可以是任何元素。
常见的4种节点：元素节点表示HTML元素，属性节点表示属性，文档类型节点表示文档类型，注释节点表示注释。
```
### 2 Node类型

**所有节点类型都继承Node类型。**

#### 2.1 nodeTpye、nodeName和nodeValue属性：

```
nodeTpye表明节点是某个类型，最常用的是元素节点和文本节点。
```

| 类型名称                | 数值 |
| ----------------------- | ---- |
| Node.ELEMENT_NODE       | 1    |
| Node.ATTRIBUTE_NODE     | 2    |
| Node.TEXT_NODE          | 3    |
| Node.CDATA_SECTION_NODE | 4    |

```
对元素而言，nodeName始终等于元素的标签名，而nodeValue则为null
```

#### 2.2 节点关系

##### 1 节点之间的关系
```
childNodes属性
childNodes返回一个NodeList实例，NodeList是类数组对象，可以使用[]，或者是item(index)方法访问元素，拥有length属性

parentNode属性
childNodes中的每个节点的parentNode都指向同一个节点

兄弟关系:
previousSibling属性和nextSibling属性 指向列表中的节点关系

firstChild和lastChild属性

hasChildNodes()方法：测试节点是否有子节点

ownerDocument属性指向代表整个文档节点的指针
```

##### 2 操纵节点

```
appendChild()末尾添加节点

```

