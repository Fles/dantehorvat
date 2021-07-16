export const Welcome = () => {
  let title = String.raw`
 __         ___ __       __  __        ___
|  \ /\ |\ | | |_   |__|/  \|__)\  / /\ |
|__//--\| \| | |__  |  |\__/| \  \/ /--\|
`;
  return <pre> {title} </pre>;
};
