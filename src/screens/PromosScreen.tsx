import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { AppLayout } from "../components/AppLayout";
import { Content } from "../components/Content";
import { PromoCard } from "../components/PromoCard";
import { Promo } from "../common/interfaces";

export const PromosScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const kamote: Promo[] = [
    {
      id: "1",
      storeId: "1",
      storeName: "Sip & Dip",
      storeLogo:
        "https://scontent.fsyd6-1.fna.fbcdn.net/v/t31.0-8/13062914_461113580751428_933251125108965451_o.png?_nc_cat=100&_nc_sid=85a577&_nc_ohc=k-gycubFeq0AX_qiORM&_nc_ht=scontent.fsyd6-1.fna&oh=8a36101e3aa58c054da140b78dad5cb8&oe=5ECB87E1",
      tagLine: "Buy 10 cups, get 1 free!",
      description: "",
      location: "Solenad, Nuvali",
    },
    {
      id: "2",
      storeId: "2",
      storeName: "Uniqlo",
      storeLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1200px-UNIQLO_logo.svg.png",
      tagLine: "Buy 5 shirts, get 1 free!",
      description: "",
      location: "Solenad, Nuvali",
    }
  ];

  return (
    <AppLayout>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchValue}
        value={searchValue}
      />

      <Content>
        <FlatList
          data={kamote}
          style={{paddingTop: 20}}
          renderItem={({ item }) => (
            <PromoCard
              key={item.id}
              promoId={item.id}
              storeName={item.storeName}
              storeLogo={item.storeLogo}
              tagLine={item.tagLine}
              description={item.description}
              location={item.location}
            />
          )}
        />
      </Content>
    </AppLayout>
  );
};
