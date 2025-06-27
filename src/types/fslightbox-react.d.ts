declare module "fslightbox-react" {
  const FsLightbox: React.ComponentType<{
    toggler: boolean;
    sources: (string | JSX.Element)[];
    slide?: number;
    types?: string[];
    key?: string | number;
  }>;
  export default FsLightbox;
}
