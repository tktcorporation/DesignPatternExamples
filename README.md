# DesignPattern

## Class Diagram

 ```uml
 @startuml

class RamenBuilder {
  menma: boolean;
  nori: boolean;
  size: Size;
  setMenma(): RamenBuilder;
  setNori(): RamenBuilder;
  changeSize(size: Size): RamenBuilder;
  build(): Ramen;
}
class ShoyuRamenBuilder {
  heavily: Heavily;
  changeHeavily(heavily: Heavily): ShoyuRamenBuilder;
  build(): ShoyuRamen;
}

Ramen <|-ri- ShoyuRamen : 継承方向
RamenBuilder <|-ri- ShoyuRamenBuilder

RamenBuilder -up-> Ramen : インターフェースの実装
ShoyuRamenBuilder -up-> ShoyuRamen
@enduml
 ```
