import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { AppLayout } from "../components/AppLayout";
import { Content } from "../components/Content";
import { PromoCard } from "../components/PromoCard";
import { Promo } from "../common/interfaces";

export const PromosScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const data: Promo[] = [
    {
      id: "1",
      companyId: "1",
      companyName: "Sip & Dip",
      companyLogo:
        "https://scontent.fsyd6-1.fna.fbcdn.net/v/t31.0-8/13062914_461113580751428_933251125108965451_o.png?_nc_cat=100&_nc_sid=85a577&_nc_ohc=k-gycubFeq0AX_qiORM&_nc_ht=scontent.fsyd6-1.fna&oh=8a36101e3aa58c054da140b78dad5cb8&oe=5ECB87E1",
      title: "Buy 10 cups, get 1 free!",
      description: "",
      location: "Solenad, Nuvali",
    },
    {
      id: "2",
      companyId: "2",
      companyName: "Uniqlo",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1200px-UNIQLO_logo.svg.png",
      title: "Buy 5 shirts, get 1 free!",
      description: "",
      location: "Solenad, Nuvali",
    },
    {
      id: "3",
      companyId: "3",
      companyName: "Starbucks",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
      title: "Buy 15 cups for starbucks planner!",
      description: "",
      location: "Makati",
    },
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
          data={data}
          style={{paddingTop: 20}}
          renderItem={({ item }) => (
            <PromoCard
              key={item.id}
              promo={item}
            />
          )}
        />
      </Content>
    </AppLayout>
  );
};
