{
    type PageInfo = {
        title: string;
    };

    type Page = 'home' | 'about' | 'contact';

    // 키(Page), 값(PageInfo)
    const nav: Record<Page, PageInfo> = {
        home: {title: 'Home'},
        about: {title: 'About'},
        contact: {title: 'Contact'},
    }


    type Product = 'cat' | 'dog';
    type NewProduct = Capitalize<Product>;
}