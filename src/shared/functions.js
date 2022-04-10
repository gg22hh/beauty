import { PriceItem } from "../components/PriceItem/PriceItem";
import { TherapyPriceItem } from "../pages/Therapy/components/TherapyPriceItem/TherapyPriceItem";

export const mapItem = (item) => {
    const list = item.map((i) => {
        return (
            <PriceItem
                key={i.id}
                title={i.title}
                text={i.text}
                price={i.price}
            />
        );
    });

    return list;
};

export const mapTherapyItem = (item) => {
    const list = item.map((i) => {
        return (
            <TherapyPriceItem
                key={i.id}
                title={i.title}
                text={i.text}
                price={i.price}
            />
        );
    });

    return list;
};
