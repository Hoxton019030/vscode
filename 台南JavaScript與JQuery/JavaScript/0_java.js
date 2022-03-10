class Person {
    //屬性
    String name;
    int age;
    double weight;
}
//建構子constractor

Person() {}
Person(String name, int age, double weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
}

//方法 method
String displayName() {
    return this.name;
}

Person Sally = new Person();
Person Peter = new Person("Peter,50,78.5");