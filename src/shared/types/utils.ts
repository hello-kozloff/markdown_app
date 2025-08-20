export type PropsWithClassName<
  T extends object = object
> = T & {
  className?: string;
};
