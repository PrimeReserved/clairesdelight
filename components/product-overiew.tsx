import { Performance } from "@/app/component/admin/product/performance";
import { Revenue } from "@/app/component/admin/sales/revenue";
import { ProductMetrics } from "@/app/component/admin/product/product-metrics";
import { CustomerInsight } from "@/app/component/admin/customers/customer-insight";
import { Inventory } from "@/app/component/admin/inventory/inventory";
import { MarketAndPromotion } from "@/app/component/admin/sales/market";
import { ProductDevelopment } from "@/app/component/admin/product/productDevelopment";
import { GeographicalInsight } from "@/app/component/admin/sales/gregraphicalInsight";
import { CustomerSupport } from "@/app/component/admin/customers/customer-support";
import { ProductUsage } from "@/app/component/admin/product/productUsage";

export function ProductOveriew() {
  return (
      <div className="grid min-h-screen w-full grid-cols-1 gap-6 bg-muted/40 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Performance />
        <Revenue />
        <ProductMetrics />
        <CustomerInsight />
        <Inventory />
        <ProductUsage />
        <MarketAndPromotion />
        <GeographicalInsight />
        <ProductDevelopment />
        <CustomerSupport />
      </div>
  );
}
