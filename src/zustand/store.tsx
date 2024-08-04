
import { create } from 'zustand';




interface StoreState {
    variationMain: any;
    setVariationMain: (x: any) => void;
}

export const storeMian = create<StoreState>((set) => ({
    variationMain: '',
    setVariationMain: (x) => set({variationMain: x}),

    


}));

